$(document).ready(function(){
  
  // Add class to Body
  var colorClasses = ['red','orange', 'blue', 'green']; //add as many classes as u want
  var colorRandomnumber = Math.floor(Math.random()*colorClasses.length) + 1;
  $('body').addClass(colorClasses[colorRandomnumber]); 
  
  // ***
});
