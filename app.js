import save, {loadDatabase} from './storage.js';

import {todoContents} from './todo.js';

import {save2,loadDatabase2} from './storage.js';

import {setContents} from './settings.js';

import {save3, loadDatabase3} from './storage.js';

import {setContents2} from './settings.js';
//console.log(setContents2)
const {
    todoForm,
    discardTodo,
    saveTodo,
    taskInput,
    normalTasks,
    pinnedCon,
    createTask,
    back3,
    completedCon
} = todoContents();

const{
  settingsCon,
  themeSet,
  themeCon,
  dark,
  light,
  darkTheme,
  lightTheme
}=setContents();

const{
  resetCard,
  resetOpt,
  erase,
  avoid
}=setContents2();
resetOpt.style.color='#ffffff';

let database=loadDatabase();

let database2=loadDatabase2();

let database3=loadDatabase3();
themeObj();

let body=document.querySelector('body');

let nav=document.querySelector('nav');

let hamburger=document.querySelector('.hamburger');

let card=document.querySelectorAll('.card');

let notesSection=document.querySelector('.notesSection');

let currentFeed=document.querySelector('.currentFeed');

let section1=document.querySelector('.one');

let section2=document.querySelector('.two');

let section3=document.querySelector('.three');

let section4=document.querySelector('.four');

let section5=document.querySelector('.five');

let notesNumber=document.querySelector('.totalNotes');

let totalTasks=document.querySelector('.totalTasks');

let featuredNotes=document.querySelector('.featuredNotes');

let completedTasks=document.querySelector('.completedTasks');

let menu=document.querySelector('.menu');

let cancel=document.querySelector('.cancel');

let home=document.querySelector('.home');
home.classList.add('active');

let notes=document.querySelector('.notes');

let todo=document.querySelector('.todo');

let settings=document.querySelector('.settings');

let form=document.querySelector('form');

let enterNote=document.querySelector('.enterNote');

let discard=document.querySelector('.discard');

let done=document.querySelector('.done');

let search=document.querySelector('.search');

let back=document.querySelector('.back');

let createNote=document.querySelector('.createNote');

let container=document.querySelector('.container');

let back2=document.querySelector('.back2');

let add=document.querySelector('.addText');

let confirmText=document.querySelector('.confirmText');

let edit=document.querySelector('.edit');

let confirmEdit=document.querySelector('.confirmEdit');

let noteP=document.querySelector('.p');

let textarea=document.querySelector('.textarea');

let confirmDel=document.querySelector('.confirmDel');

let no=document.querySelector('.no');

let yes=document.querySelector('.yes');

let noteHead=document.querySelector('.noteHead');

let utility2=document.querySelector('.utility2');

let starbtn=document.querySelector('.starbtn');

let section6=document.querySelector('.six');

let selectedNote;
let noteToOpen;

// hamburger menu click interactivity
function hamburgerDisplay(){
hamburger.addEventListener('click', function() {
  section2.classList.add('openSidebar');
})
cancel.addEventListener('click', function(){
  section2.classList.remove('openSidebar')
})
};

//side menu interactive section
function active(){
  home.addEventListener('click', ()=>{
    home.classList.add('active');
    notes.classList.remove('active');
    todo.classList.remove('active');
    settings.classList.remove('active');
    section2.classList.remove('openSidebar');
    section1.classList.remove('hide');
    section3.classList.remove('show');
    section5.classList.remove('show');
    section6.classList.remove('show');
    currentFeed.textContent='Home Feed';
  });
  
  notes.addEventListener('click', ()=>{
    notes.classList.add('active');
    home.classList.remove('active');
    todo.classList.remove('active');
    settings.classList.remove('active');
    section2.classList.remove('openSidebar');
    section1.classList.add('hide');
    section3.classList.add('show');
    section4.classList.remove('show');
    currentFeed.textContent='Notes Feed';
    section5.classList.remove('show');
    section6.classList.remove('show');
    
  });
  
  todo.addEventListener('click', ()=>{
    todo.classList.add('active');
    home.classList.remove('active');
    notes.classList.remove('active');
    settings.classList.remove('active');
    section2.classList.remove('openSidebar');
    section1.classList.add('hide');
    section3.classList.remove('show');
    section4.classList.remove('show');
    section5.classList.add('show');
    currentFeed.textContent='Todo Feed';
    section6.classList.remove('show');
  })
  
  settings.addEventListener('click', ()=>{
    settings.classList.add('active')
    home.classList.remove('active');
    notes.classList.remove('active');
    todo.classList.remove('active');
    section2.classList.remove('openSidebar');
    section1.classList.add('hide');
    section3.classList.remove('show');
    section4.classList.remove('show');
    section5.classList.remove('show');
    section6.classList.add('show');
    currentFeed.textContent='Settings Page';
  })
};

//back navigation to home
back.addEventListener('click', ()=>{
  section3.classList.remove('show');
  section1.classList.remove('hide');
  currentFeed.textContent='Home Feed';
  notes.classList.remove('active');
  home.classList.add('active');
})

//form display
function displayForm(){
   createNote.addEventListener('click', ()=>{
     form.classList.add('show');
   });
   
   discard.addEventListener('click', (event)=>{
     event.preventDefault()
     form.classList.remove('show');
   });
 };
 
 //delete function
 function deleteCard(selectedNote){
   database.splice(selectedNote,1);
   save(database);
 }
   
//form validation state
function validateNote(){
   done.addEventListener('click', (event)=>{
     event.preventDefault();
     
     if (enterNote.value===""){
       enterNote.style.border='2px solid red';
     }
     else{
       const newNote = {
        title: enterNote.value,
        noteText:'',
        star:'',
       };
       database.push(newNote);
       stats();
       save(database);
       displayNotes();
       
       enterNote.value="";
       enterNote.style.border='2px solid #e2e8f0';
       form.classList.remove('show');
     }
   });
};

//notes display function
function displayNotes(){
  container.textContent="";
  
  for (let i=0; i<database.length; i++){
    let notesCard=document.createElement('div');
    notesCard.classList.add('notesCard');
    
    if (database3[0].isDark===true){
      notesCard.style.background='#1e2a3b';
      notesCard.style.borderColor='#334155';
    }
    else{
      notesCard.style.background='#ffffff';
      notesCard.style.borderColor='#e2e8f0';
    }
    
    notesCard.addEventListener('click', function(){
      noteToOpen=i;
      currentFeed.textContent='';
      utility2.style.marginTop='15px';
      section3.classList.remove('show');
      section4.classList.add('show');
      noteHead.textContent=database[noteToOpen].title;
      noteP.textContent=database[noteToOpen].noteText;
    })
    
    let deletebtn=document.createElement('button');
    deletebtn.textContent='Delete';
    deletebtn.classList.add('button');
    
    deletebtn.addEventListener('click', (event)=>{
      event.stopPropagation();
      event.preventDefault();
     
      selectedNote=i;
      confirmDel.style.color='white';
      confirmDel.style.fontWeight='bold';
      confirmDel.classList.add('show');
      
    });
    
    let h3=document.createElement('h3');
    h3.textContent=database[i].title;
    
    notesCard.appendChild(h3);
    notesCard.appendChild(deletebtn);
    container.appendChild(notesCard);
  }
};

// notes stats display
function stats(){
 // for (let i=0; i<database.length; i++){
   notesNumber.textContent=database.length; 
  //}
};

function updateFeature (){
  const featuredNotesDisplay = database.filter(note => {
    return note.star === "🌟";
});

const totalFeaturedNotes = featuredNotesDisplay.length;

featuredNotes.textContent=(totalFeaturedNotes);

};

// fearure event listener
starbtn.addEventListener('click', ()=>{
  database[noteToOpen].star = '🌟'
  database[noteToOpen].title +='🌟'
  displayNotes();
  updateFeature();
  save(database);
});

no.addEventListener('click', ()=>{
  confirmDel.classList.remove('show');
});

yes.addEventListener('click', ()=>{
  deleteCard(selectedNote);
  displayNotes();
   confirmDel.classList.remove('show');
   stats();
   updateFeature();
});

function notesDisplay(){
  edit.style.display='block';
  
  back2.addEventListener('click', function(){
   section4.classList.remove('show');
   section3.classList.add('show');
   currentFeed.textContent='Notes Feed';
   add.style.display='block';
   edit.style.display='block';
   confirmEdit.style.display='none';
   confirmText.style.display='none';
   textarea.style.display='none';
   textarea.value='';
   textarea.style.border='3px solid #e2e8f0';
  });
  
  add.addEventListener('click', function(){
    textarea.style.display='block';
    add.style.display='none';
    edit.style.display='none';
    confirmText.style.display='block';
  });
  
  confirmText.addEventListener('click', function(){
   database[noteToOpen].noteText +=textarea.value;
    save(database);
    textarea.value="";
    add.style.display='block';
    edit.style.display='block';
    confirmText.style.display='none';
    textarea.style.display='none';
    noteP.textContent=database[noteToOpen].noteText;
  });
  
  edit.addEventListener('click', ()=>{
   textarea.value = database[noteToOpen].noteText;
    textarea.style.display='block';
    edit.style.display='none';
    add.style.display='none';
    confirmEdit.style.display='block';
  });
  
  confirmEdit.addEventListener('click', ()=>{
    database[noteToOpen].noteText = textarea.value;
    save(database);
   
    textarea.value="";
    add.style.display='block';
    edit.style.display='block';
    confirmEdit.style.display='none';
    textarea.style.display='none';
    noteP.textContent=database[noteToOpen].noteText;
  });
}

//The Search feature
function searchFeature(){
search.addEventListener("keydown", (event) => {
  
    if (event.key === "Enter") {

        const searchTerm = search.value.trim().toLowerCase();
        
        const results = database.filter(notes => {
         return notes.title.toLowerCase().includes(searchTerm);
       });
        displayNotes(results);
    }

  });
}

//=========================//
      //todoapp logic//
function todoNav(){
  back3.addEventListener('click',()=>{
    section5.classList.remove('show');
    section3.classList.add('show');
    todo.classList.remove('active');
    notes.classList.add('active');
    currentFeed.textContent='Notes Feed';
  });
  
  createTask.addEventListener('click', ()=>{
    todoForm.classList.add('show');
  });
}

function todoValidation(){
  discardTodo.addEventListener('click', ()=>{
    todoForm.classList.remove('show');
  });
  
  saveTodo.addEventListener('click', ()=>{
    if (taskInput.value===""){
      taskInput.style.border='3px solid red';
    }
    else{
      normalTasks.textContent="";
      const tasks={
        task:taskInput.value,
        completed:false
      }
      database2.push(tasks);
      save2(database2);
      renderTodo();
      totalTodo();
      
      taskInput.value="";
      
    }
  });
}
applyTheme();
hamburgerDisplay();
active();
displayForm();
validateNote();
displayNotes();
notesDisplay();
stats();
updateFeature();

    //for the todoapp//
let todoDelete;
let selectedTask;
    
function renderTodo(){
  pinnedCon.textContent='';
  normalTasks.textContent='';
  completedCon.textContent='';
  
  for (let i=0; i<database2.length; i++){
    
   if (database2[i].completed===false){
    let div1=document.createElement('div');
    div1.className='div1';
    
    let div2=document.createElement('div');
    div2.style.display='flex';
    div2.style.gap='5px';
    
    let input=document.createElement('input');
    input.type='checkbox';
    input.addEventListener('click', ()=>{
      selectedTask=i;
      database2[selectedTask].completed=true;
      save2(database2);
      renderTodo();
      completedTodo();
    })
    
    let h3=document.createElement('h3');
    h3.textContent=database2[i].task;
    
    let del=document.createElement('p');
    del.textContent='✖️';
    del.style.cursor='pointer';
    del.addEventListener('click', function(){
      todoDelete=i;
      database2.splice(todoDelete,1);
      save2(database2);
      renderTodo();
      totalTodo();
      completedTodo();
    })
        
    div2.appendChild(input);
    div2.appendChild(h3);
    div1.appendChild(div2);
    div1.appendChild(del);
    normalTasks.appendChild(div1);
    
    if (database3[0].isDark===true){
      normalTasks.style.background='#1e2a3b';
      normalTasks.style.borderColor='#334155';
    }
    else{
      normalTasks.style.background='#ffffff';
      normalTasks.style.borderColor='#e2e8f0';
    }
    
   }
   else{
     
     let doneCon=document.createElement('div');
     doneCon.style.display='flex';
     doneCon.style.justifyContent='space-between';
     doneCon.style.alignItems='center';
     
     let done=document.createElement('h3');
     done.textContent=database2[i].task;
     done.style.textDecoration='line-through';
     
     let remove=document.createElement('p')
     remove.textContent='✖️';
     remove.style.cursor='pointer';
     remove.addEventListener('click', ()=>{
       todoDelete=i;
       database2.splice(todoDelete,1);
       save2(database2);
       renderTodo();
       totalTodo();
       completedTodo();
     })
     
     doneCon.appendChild(done);
     doneCon.appendChild(remove);
     completedCon.appendChild(doneCon);
     
     if (database3[0].isDark===true){
       completedCon.style.background='#1e2a3b';
       completedCon.style.borderColor='#334155';
     }
     else{
       completedCon.style.background='#ffffff';
       completedCon.style.borderColor='#e2e8f0'
     }
   }
  }
}

function totalTodo(){
  //for (let i=0; i<database2.length; i++){
    totalTasks.textContent=database2.length;
  //}
}

function completedTodo(){
  let filteredTodo=database2.filter(task=>{
    return (task.completed===true);
  })
  completedTasks.textContent=(filteredTodo.length);
}

applyTheme();  
todoNav();
todoValidation();
renderTodo();
totalTodo();
completedTodo();

    //For Settings//
function renderTheme() {
  themeSet.addEventListener('click', ()=>{
   themeCon.classList.add('show');
  })
  
  resetCard.addEventListener('click', ()=>{
    resetOpt.classList.add('show');
  })
}

function themeObj(){
  const condition={
    isDark:false
  }
  if (database3.length===0){
  database3.push(condition);
  save3(database3)
  }
}

function themeEvent(){
  dark.addEventListener('click', ()=>{
    database3[0].isDark=true;
    save3(database3);
    applyTheme();
    renderTodo();
    displayNotes();
    themeCon.classList.remove('show');
  })
  light.addEventListener('click', ()=>{
    database3[0].isDark=false;
    save3(database3);
    applyTheme();
    renderTodo();
    displayNotes();
    themeCon.classList.remove('show');
  })
  
  avoid.addEventListener('click', ()=>{
    resetOpt.classList.remove('show');
  })
  
  erase.addEventListener('click', ()=>{
    database2.length=0;
    save2(database2);
    
    database.length=0;
    save(database);
    
    database3[0].isDark=false;
    save3(database3);
    
    applyTheme();
    displayNotes();
    renderTodo();
    //applyTheme();
    totalTodo();
    completedTodo();
    stats();
    updateFeature();
    resetOpt.classList.remove('show');
  })
}

function applyTheme(){
  if (database3[0].isDark===true){
    body.style.background='#0f172a';
    body.style.color='#f8fafc';
    
    nav.style.background='#020617';
    nav.style.borderColor='#334155'
    
    for (let i=0; i<card.length; i++){
    card[i].style.background='#1e2a3b';
    card[i].style.borderColor='#334155';}
    
    themeSet.style.background='#1e2a3b';
    themeSet.style.borderColor='#334155';
    
    darkTheme.style.background='#1e2a3b';
    darkTheme.style.borderColor='#334155';
    
    lightTheme.style.background='#1e2a3b';
    lightTheme.style.borderColor='#334155';
    
    resetCard.style.background='#1e2a3b';
    resetCard.style.borderColor='#334155';
  }
  else{
    body.style.background='#f8f9fa';
    body.style.color='#334155';
    nav.style.background='#1e293b';
    
    for (let i=0; i<card.length; i++){
      card[i].style.background='#f8f9fa';
      card[i].style.borderColor='#e2e8f0';}
      
    themeSet.style.background
     = '#ffffff';
    themeSet.style
     .borderColor = '#e2e8f0';

    darkTheme.style
      .background = '#ffffff';
    darkTheme.style
      .borderColor = '#e2e8f0';

    lightTheme.style
      .background = '#ffffff';
    lightTheme.style
      .borderColor = '#e2e8f0';
      
    resetCard.style.background='#ffffff';
    resetCard.style.borderColor='#e2e8f0';
    
  }
}

renderTheme();
//themeObj();
themeEvent();
applyTheme();
