let tasks = [];


function renderTasks() {
    const addButton = document.getElementById("addButton");
    
    const completed = document.createElement("button");
    completed.innerText = "Completed"  
    completed.addEventListener("click" , function(){
        listItem.classList.toggle("completed");
    });

    const unoderedList = document.getElementById("unOdered");
}

function adTask() {
    const input = document.getElementById("input");
    let listData = input.value;

    if(listData.trim() !== "") { 
        let listItem = document.createElement("li");
        input.value = "";
    }
    renderTasks();

function deleteTask() {
    const deleteItem = document.createElement("button");
    deleteItem.innerText = "Delete";
    deleteItem.addEventListener("click" , function(){
        deleteItem.parentElement.remove()
    });
    renderTasks();
}



// working of this todo
// enter input, press add btn, input stored in listData, listData gets verified, new list is created, list named listitem, input gets cleaned

// new complete button is created, button named completed, button got toggle function, new delete button created, button named delete, button got a delete function
// listdata value stored in listitem, listitem apended to ul, del btn and completed btn appended to listitem.

// I have to make it easier : create 3 functions add, delete, render
// add will add items to list :-
// tekes input, store it listdata, verifies it, clears input
// 
// delete will delete items in list :-
// 
// 
// render will render all:-
// 
// 

        addButton.addEventListener("click" , function(){ 

                listItem.innerText = listData;

                unoderedList.appendChild(listItem);
                listItem.appendChild(deleteItem);
                listItem.appendChild(completed);
            }
        });