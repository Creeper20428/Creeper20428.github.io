// Core.js: Core
var core={};
core.init=function(){
  // Do_Something
}
core.run=function(function){
  try {
    eval(function.toString());
  }
  catch(e){
    console.log("Error when running function: " + e.toString());
  }
  finally{
    console.log("Done");
  }
}
