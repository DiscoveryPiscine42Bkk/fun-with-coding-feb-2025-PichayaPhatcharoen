function insert() {
    let todo = prompt("Insert todo text");
    if(todo == null || todo == ""){return;}

    const newNode = document.createElement("div");
    newNode.innerHTML = '<p>' + todo + '</p>';
    newNode.classList.add("todo");
    
    newNode.addEventListener("click", clickdel);
    function clickdel(){
        deletetodo(newNode);
    }

    const list = document.getElementById("ft_list");
    list.insertBefore(newNode, list.firstChild); 
    savecookies();
}

function deletetodo(node) {
    const cf = confirm("Do you want to remove this TO-DO?");
    if (cf) {
        node.remove();
        savecookies();
    }
}

function savecookies() {
    const list = document.getElementById("ft_list");
    const todos = [];
    for (let node of list.childNodes) {
        todos.push(node.innerText);
    }
    
    console.log(document.cookie);
    document.cookie = "todos=" + JSON.stringify(todos) + "; expires=Thu, 07 Feb 2026 12:00:00 UTC; path=/";
    console.log(todos)
}

function loadcookies() {
    const cookies = document.cookie.split(';'); // ==>ตย. "todos=["a","b"]" , " path=/"
    for (let cookie of cookies) {   
        cookie = cookie.trim();
        if (cookie.startsWith("todos=")) { 
            const todoData = cookie.substring("todos=".length); // ==> ตย. "["a","b"]"
            if (todoData.length > 0) {
    
                const todos = JSON.parse(todoData);  // ==> ["a","b"]
    
                todos.forEach(data => {
                    const newNode = document.createElement("div");
                    newNode.innerHTML = '<p>' + data + '</p>';
                    newNode.classList.add("todo");
                    
                    newNode.addEventListener("click", function() {
                        deletetodo(newNode);
                    });                
                    document.getElementById("ft_list").appendChild(newNode);
                });
            }
            break;
            
        }
        }
}

window.onload = function () {
    loadcookies();
};


