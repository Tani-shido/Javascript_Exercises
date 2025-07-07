const express = require("express");
const {tasks , users} = require("./db.js");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Tanishq";
const app = express();
app.use(express.json());


app.get("/" , (req , res) => {
    res.send("Welcome motherfucker");
});

function protectRoute(req , res , next){
    const headerStoken = req.headers["authorization"];
    if(!headerStoken || !headerStoken.startsWith('Bearer ')){
        return res.status(401).json({error: "Unauthorized: No token provided"});
    }

    const token = headerStoken.split(' ')[1];

    jwt.verify(token , JWT_SECRET , (err , decoded)=> {
        if(err){
            return res.status(401).json({error: "Forbidden: Invalid Token"});
        }
        req.user = decoded;

        next();
    });
}

app.get("/task" , protectRoute ,(req , res) => {
    res.json({tasks , users});
});

let newTaskId = 4
app.post("/task" , protectRoute , (req , res) => {
    const newTitle =  req.body.title;
    const newTask = {
        id: newTaskId,
        title: newTitle,
        completed: false
    }
    newTaskId++;
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get("/task/:id" , protectRoute ,(req , res) => {
    const findId = parseInt(req.params.id);
    const findIdValue = tasks.find( (task) => {
        return task.id === findId;
    });

    if(findIdValue){
        res.json(findIdValue);
    } else {
        res.status(404).json({ message: "Task not found with that ID" });
    }
});

let newUserId = 1
app.post("/auth/register" , async (req , res) => {
    const { username, password } = req.body; 
    
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log({ username, hashedPassword });
    
    const newUser = {
        id: newUserId,
        username: username,
        hashedPassword: hashedPassword
    }
    users.push(newUser);
    res.status(201).json({
        message: "Registration successful",
        user: {
            id: newUserId,
            username: newUser.username
        }
    });
    newUserId++;
});

app.get("/user/:id" , (req , res) => {
    const findId = parseInt(req.params.id);
    const findIdValue = users.find( (user) => {
        return user.id === findId;
    });

    if(findIdValue){
        res.json(findIdValue);
    } else {
        res.status(404).json({ message: "User not found with that ID" });
    }
});

app.post("/auth/login" , async (req , res) => {
    const { username, password } = req.body; 

    const foundUser = users.find(u => u.username === username);

    if(!foundUser || !(await bcrypt.compare(password , foundUser.hashedPassword))) {
        return res.status(401).json({ message: "Username and password are either required or wrong" });
    }
        
    const token = jwt.sign({
        id: foundUser.id,
        username: foundUser.username
    }, JWT_SECRET,
    { expiresIn: "1h" });

    res.json({ 
        token,
        message: "Login Successful" 
    });
});

app.listen(3000);
console.log("Server is running");

