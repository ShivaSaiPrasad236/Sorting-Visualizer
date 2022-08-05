var bubbleSort_btn = document.querySelector(".bubbleSort");
async function bubble(){
  console.log("bubble is working");
  var bars = document.querySelectorAll(".bar");
  console.log(typeof(bars.length));
  for(let i=0; i<bars.length-1; i++){
    //console.log("in i loop");
    for(let j=0; j<bars.length-i-1; j++){
      //console.log("in j loop");
      bars[j].style.backgroundColor = "cyan";
      bars[j+1].style.backgroundColor = "cyan";
      if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)){
          //console.log("In if block");
          await wait(delay);
          swap(bars[j],bars[j+1]);
      }
      else{
        await wait(delay);
        console.log("");
      }
      if(array[j]>array[j+1]){
        [array[j],array[j+1]] = [array[j+1],array[j]];
      }
      await wait(delay);
      bars[j].style.backgroundColor = "rgb(255,0,234)";
      bars[j+1].style.backgroundColor = "rgb(255,0,234)";

    }
    bars[(bars.length-i-1)].style.backgroundColor = "green";
  }
  console.log(array);
  bars[0].style.backgroundColor = "green";
}

bubbleSort_btn.addEventListener("click",async function(){
  disable_newArray_btn();
  disable_size_slider();
  disable_buttons();
  let bub = document.querySelector(".bub");
  // bub.style.display = "block";
  await bubble();
  enable_newArray_btn();
  enable_size_slider();
  enable_buttons();
  // bub.style.display= "none";
});