function loadDatabase(){
  let database=JSON.parse(localStorage.getItem("database")) || [];
  return database;
}

function save(database){
  localStorage.setItem("database", JSON.stringify(database));
}
export default save;
export {loadDatabase};

//for the todoapp database//
function loadDatabase2(){
  let database2=JSON.parse(localStorage.getItem("database2")) || [];
  return database2;
}

function save2(database2){
  localStorage.setItem("database2", JSON.stringify(database2));
}
export {save2, loadDatabase2};

    //For settings//
function loadDatabase3(){
  let database3=JSON.parse(localStorage.getItem('database3')) || [];
  return database3;
}

function save3(database3){
  localStorage.setItem('database3', JSON.stringify(database3));
}
export {save3,loadDatabase3}


