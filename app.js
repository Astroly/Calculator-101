

function inp(value){
  
//  var x = document.getElementById(showNum).num;
 var num = document.getElementById("showNum").innerHTML += value;

}


function slo(){
  let num1 = document.getElementById("showNum").innerHTML
  let num2 = eval(num1)
  document.getElementById("showNum").innerHTML = num2
}

// function oparation(optvalue){
//   var opt = document.getElementById("showNum").innerHTML = optvalue;
//   console.log(opt);
  
// }
function clr() 
{ 
    document.getElementById("showNum").innerHTML = ""
   
} 