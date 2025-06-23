
    let todos = [];

    function addTodo() {
      todos.push({
        title: document.querySelector("input").value
      })
      render();
    }

    function deleteTodo() {
      
      render();
    }
 
    function render() {
        document.getElementById("todo").innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const div = document.createElement("div");
        const h1 = document.createElement("hi");
        const button = document.createElement("button");
        button.innerHTML = "Delete"
        h1.innerHTML = todo.title;
        div.append(h1);
        div.append(button);
        document.getElementById("todo").appendChild(div);
      }
    }
