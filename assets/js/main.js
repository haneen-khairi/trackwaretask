window.onload = function(){
  setTimeout(function(){
     $('.loader-bg').fadeToggle();
  }, 1000);
 };
 
var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var boxes = document.querySelectorAll(".box");

for (i = 0; i < boxes.length; i++) {
   
  boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
   
}
