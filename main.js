function addTask() {
    var search = document.getElementById("search");
    var storeinput = search.value;
    var todolist = document.getElementById("todo-list");

    if (storeinput !== "") {
        var list = document.createElement("li");
        var btn=document.createElement("button");
        list.textContent = storeinput;
        btn.innerHTML='<i class="fa-solid fa-trash-can-arrow-up"></i>';
        btn.style.marginLeft="5rem";

       
        todolist.appendChild(list);
        list.appendChild(btn);
        search.value = "";
    }

   todolist.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
   })
}
