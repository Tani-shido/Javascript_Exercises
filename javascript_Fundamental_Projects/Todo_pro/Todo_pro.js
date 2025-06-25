
    let todos = [];

    function addTodo() {
      todos.push({
        title: document.querySelector("input").value
      })
      render();
    }

    function deleteTodo(index) {
      todos.splice(index , 1);
      render();
    }


    function render() {
        document.getElementById("todo").innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const divEl = document.createElement("div");
        const h1 = document.createElement("hi");

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.setAttribute("onclick" , "deleteTodo()");
        
        const completeButton = document.createElement("input");
        completeButton.setAttribute('type' , 'checkbox');
        completeButton.addEventListener("click" , function(){
          divEl.classList.toggle("completed");
        });

        h1.innerHTML = todo.title;
        divEl.append(completeButton);
        divEl.append(h1);
        divEl.append(deleteButton);
        document.getElementById("todo").appendChild(divEl);
        document.querySelector("input").value = "";
      }
    }
