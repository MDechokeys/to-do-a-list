(()=> {
    let toDolistArray = [];
    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let itemId = String(date.now());
        let toDoItem = input.Value;
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        input.value = "";
    });
    ul.addEventListener("click", (e) =>{
        let id = e.targetAttribute("data-id");
        if(!id) return;
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });
    function addItemToDOM(itemId, toDoItem){
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);

    }
    function addItemToArray(itemId,toDoItem){
        toDoItemArray.push(itemId, toDoItem);
        console.log(toDolistArray);
    }
    function removeItemFromDOM(id){
    var li = document.querySelector('[data-id="'+ id + '"]');
    ul.removeChild(li);

    }
    function removeItemFromArray(id){
        toDolistArray = toDolistArray.filter((item) => item.itemId !== id);
        console.log(toDolistArray);
    }
})();