function setContents(){
 let settingsCon=document.querySelector('.settingsCon');
 
 let themeSet=document.querySelector('.themeSet');
 
 let themeCon=document.querySelector('.themeCon');
 
 let dark=document.querySelector('.dark');
 
 let light=document.querySelector('.light');
 
 let darkTheme=document.querySelector('.darkTheme');
 
 let lightTheme=document.querySelector('.lightTheme');
 
 return {settingsCon, themeSet, themeCon, dark, light, darkTheme, lightTheme};
}

export{setContents};

function setContents2(){
 let resetCard=document.querySelector('.resetCard');
 
 let resetOpt=document.querySelector('.resetOpt');
 
 let erase=document.querySelector('.erase');
 
 let avoid=document.querySelector('.avoid');
 
 return {avoid,erase,resetOpt, resetCard}
}

export{setContents2}
