let moon=document.getElementById("moon");
let train=document.getElementById("train");
let text=document.getElementById("text");
let desert=document.getElementById("desert-moon")
let man=document.getElementById("man")


window.addEventListener('scroll',()=>{
  let value=window.scrollY;
  console.log(value,'scrolling');
  moon.style.top=value*.9+"px";
  // train.style.left=10+value*-0.2+"px";
  text.style.top= 80+value*-0.2+'%'
  train.style.left=value*1.5+"px"

  desert.style.top=value*.3+"px"
  man.style.left=value*.6+"px"


  



})