function inp(value){
  var num = document.getElementById("showNum").innerHTML += value;

}
function cal(){
  let num1 = document.getElementById("showNum").innerHTML
  let num2 = eval(num1)
  document.getElementById("showNum").innerHTML = num2
 }
 function clr() 
{ 
   document.getElementById("showNum").innerHTML = ""
  
} 