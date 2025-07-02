

    let pages = []; 
    let todos = [];

    function addPage() {
      pages.push({
        title: document.getElementById("inputPage").value
      })
      renderPage();
    }

    function deletePage(index) {
      pages.splice(index , 1);
      renderPage();
    }

    function editPage() {
      todos.push({
        title: document.querySelector("h4").innerHTML
      })
      render();
      renderPage();
    }

    function renderPage() {
        document.getElementById("page").innerHTML = "";
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const pageEl = document.createElement("div");
        const h4 = document.createElement("h4");

        const deletePage = document.createElement("button");
        deletePage.innerText = "Delete Page";
        deletePage.setAttribute("onclick" , "deletePage()");
        
        const completePage = document.createElement("input");
        completePage.setAttribute('type' , 'checkbox');
        completePage.addEventListener("click" , function(){
          pageEl.classList.toggle("completed");
        });

        const editPage = document.createElement("button");
        editPage.innerHTML = "Edit Page";
        editPage.setAttribute("onclick" , "editPage()");
        

        h4.innerHTML = page.title;
        pageEl.append(completePage);
        pageEl.append(deletePage);
        pageEl.append(editPage);
        pageEl.append(h4);
        document.getElementById("page").appendChild(pageEl);
        document.getElementById("inputPage").value = "";
      }
    }

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
