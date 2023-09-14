let toDoList=JSON.parse(localStorage.getItem('toDoList'));
displayToDOList();
function displayToDOList(){
  let todoHTML='';
  for(let i=0; i<=toDoList.length-1; i++){
    let todoObject=toDoList[i];
    let {name,dueDate}=todoObject;
    const html=
    `<div class="text">${name} </div>
      <div class="text">${dueDate}</div> 
      <button title="Delete" onclick="
        toDoList.splice(${i},1);
        displayToDOList();
      "class="delete-button">Delete</button>
    `;
    todoHTML+=html;
   
    
  }
 
  console.log(todoHTML);
  document.querySelector('.js-todo-list').innerHTML=todoHTML;
  localStorage.setItem('toDoList',JSON.stringify(toDoList) )
  
}



function addTodo(){
  let buttonElement=document.querySelector('.js-todo-name ');
  let name=buttonElement.value;
  let dateInputElement=document.querySelector('.js-todo-date');
  let dueDate=dateInputElement.value;

 
    toDoList.push(
      {
        name,
        dueDate
      }
    );
    
   console.log(toDoList);
   buttonElement.value='';
   displayToDOList();
   

}
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    addTodo();
  }
})

document.querySelector('.js-add-button').addEventListener('click',()=>{
  addTodo();
});