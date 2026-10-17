function todoContents(){
  let back3=document.querySelector('.back3');
  
  let createTask=document.querySelector('.createTask');
  
  let pinnedCon=document.querySelector('.pinnedCon');
  
  let normalTasks=document.querySelector('.normalTasks');
  
  let taskInput=document.querySelector('.taskInput');
  
  let saveTodo=document.querySelector('.saveTodo');
  
  let discardTodo=document.querySelector('.discardTodo');
  
  let todoForm=document.querySelector('.todoForm');
  
  let completedCon=document.querySelector('.completedCon');
  
  return {todoForm, discardTodo, saveTodo, taskInput, normalTasks, pinnedCon, createTask, back3, completedCon};
}

export {todoContents};