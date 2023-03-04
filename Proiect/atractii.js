function cosmi(event) { 
    alert(event.target.nodeName+" si "+ event.currentTarget.nodeName);
    event.stopPropagation();
  }

  var culoare = Array("blue", "red", "green", "pink", "brown");

  var randomcul = culoare[Math.floor(Math.random()*culoare.length)];


const element = document.getElementById("queen");
const cssob= window.getComputedStyle(element, null);
document.getElementById("queen").style.color = randomcul;
let bgColor = cssob.getPropertyValue("color");
document.getElementById("king").innerHTML = bgColor;


