const
     inputBox = document.querySelector(".inputField input"),
     addBtn = document.querySelector(".inputField button"),
     todoList = document.querySelector(".list");


function showTasks() {
     let
          getLocalStorage = localStorage.getItem("todo"),
          list = getLocalStorage == null ? [] : JSON.parse(getLocalStorage),
          newLiTag = '',
          number = document.querySelector(".number");
     list.forEach((li, index) => {
          newLiTag += `<li>${li}<span onclick="deleteTask(${index})"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><g><path d="M9.16992 14.8299L14.8299 9.16992" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.8299 14.8299L9.16992 9.16992" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g></svg></span></li>`;
          todoList.innerHTML = newLiTag;
          number.innerHTML = list.length;     
     });
}

function deleteTask(index){
     let
          getLocalStorage = localStorage.getItem("todo"),
          list = JSON.parse(getLocalStorage);
     list.splice(index, 1);
     localStorage.setItem("todo", JSON.stringify(list));
     showTasks();
     if(index === 0){
          window.location.reload();
     }
}


inputBox.addEventListener("input", () => {
     let todoData = inputBox.value;
     if (todoData.length !== 0) {
          addBtn.classList.remove("disable");
     } else {
          addBtn.classList.add("disable");
     }
});

addBtn.addEventListener("click", () => {
     let
          getLocalStorage = localStorage.getItem("todo"),
          todoData = inputBox.value,
          list = getLocalStorage === null ? [] : JSON.parse(getLocalStorage);
     list.push(todoData);
     localStorage.setItem("todo", JSON.stringify(list));
     inputBox.value = "";
     showTasks();
});

window.addEventListener("load", ()=>{
     showTasks();
});
function deleteAll(){
     let list = [];
     localStorage.setItem("todo", JSON.stringify(list));
     window.location.reload();
}