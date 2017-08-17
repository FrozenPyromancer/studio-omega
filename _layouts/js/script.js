$(document).ready(function(){
  
  // Add class to Body 
  var colorClasses = ['red','orange', 'blue', 'green']; //add as many classes as u want
  var colorRandomnumber = Math.floor(Math.random()*colorClasses.length);
  $('body').addClass(colorClasses[colorRandomnumber]); 
  
  // ***
});
