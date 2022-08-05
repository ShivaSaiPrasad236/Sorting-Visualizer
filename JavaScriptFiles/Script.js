var array_size_slider = document.querySelector("#arraySize");
var speed_input_slider = document.querySelector("#speedInput");
var new_array_btn = document.querySelector(".newArray");
var container = document.querySelector(".container");
let array = [];

//function to disable the sorting buttons during sorting
function disable_buttons(){

  console.log("disabling buttons");
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  
}

// function to enable the sorting buttons after completion of sorting
function enable_buttons(){

  console.log("enabling buttons");
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  
}

function disable_size_slider(){
  array_size_slider.disabled = true;
}

function enable_size_slider(){
  array_size_slider.disabled = false;
}

function disable_newArray_btn(){
  new_array_btn.disabled = true;
}

function enable_newArray_btn(){
  new_array_btn.disabled = false;
}


function swap(bar1,bar2){
  [bar1.style.height,bar2.style.height] = [bar2.style.height,bar1.style.height];
}

createNewArray(15);
var delay = 250;
function wait(milliSec){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("")},milliSec);
  });
}

speed_input_slider.addEventListener("input",function(){
  console.log(speed_input_slider.value);
  delay = 600 - parseInt(speed_input_slider.value);
});

array_size_slider.addEventListener("input", function(){
  console.log(array_size_slider.value);
  createNewArray(parseInt(array_size_slider.value));
});
new_array_btn.addEventListener("click",function(){
  createNewArray(parseInt(array_size_slider.value));
});

function createNewArray(noOfBars){

  // var bar = document.createElement("div");
  // container.appendChild(bar);
  array = [];
  bars.innerHTML = "";
  for(let i = 0; i < noOfBars; i++){
    array[i] = Math.floor(Math.random()*200)+10;
  }
  console.log(array);
  
  for(let i = 0; i<noOfBars; i++){
    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.alignSelf = "flex-end";
    bar.style.height = `${array[i]*2}px`;
    bars.appendChild(bar);
   }
}
