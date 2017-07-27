console.log("hi");

let output = "You have clicked ";
let mouseOver = "You have moved your mouse over ";
let outputTarget = document.getElementById("output-target");
let inputTarget = document.getElementById("keypress-input");
// let colorButton = document.getElementById("add-color");


document.getElementById("intro").addEventListener("click", function(){
    document.getElementById("output-target").innerHTML = output + "The introduction."
   
});

document.getElementById("body").addEventListener("click", function(){
    document.getElementById("output-target").innerHTML = output + "The body."
  
});

document.getElementById("section1").addEventListener("click", function(){
    document.getElementById("output-target").innerHTML = output + "Section one."
  
});

document.getElementById("section2").addEventListener("click", function(){
    document.getElementById("output-target").innerHTML = output + "Section two."
  
});
document.getElementById("section3").addEventListener("click", function(){
    document.getElementById("output-target").innerHTML = output + "Section three."
  
});

document.getElementById("conclusion").addEventListener("click", function(){
    document.getElementById("output-target").innerHTML = output + "The conclusion."
  
});

document.getElementById("page-title").addEventListener("mouseover", function(){
    document.getElementById("output-target").innerHTML = mouseOver + "The header."
  
});

document.getElementById("page-title").addEventListener("mouseout", function(){
    document.getElementById("output-target").innerHTML = "You left me!"
  
});

inputTarget.addEventListener("keyup", function(event){
	// console.log("event", event);
	outputTarget.innerHTML = event.target.value;
});

let guineaPig = document.getElementById("guinea-pig");
document.getElementById("add-color")
    .addEventListener("click", function(){
        guineaPig.classList.toggle("flashy");
    
    });