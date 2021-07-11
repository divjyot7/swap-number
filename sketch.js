

var a = prompt('Enter the first variable: ');
var b = prompt("Enter the secend variable:");
function setup(){
  var b2 = createButton("click here to Swap");
 b2.mousePressed(Swap) 
 
}
function Swap(){ 
  [ a,b ] = [ b,a ]
  console.log("The value of a after Swap "+ a ) 
  console.log("The value of b after Swap "+ b )
}

function draw()
{
}

