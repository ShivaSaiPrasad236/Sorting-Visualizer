var insertSort_btn = document.querySelector(".insertionSort");
insertSort_btn.addEventListener("click",async function(){
  disable_newArray_btn();
  disable_size_slider();
  disable_buttons();
  await insert();
  enable_newArray_btn();
  enable_size_slider();
  enable_buttons();
});

async function insert(){

  var bars = document.querySelectorAll(".bar");
  for(let i = 1; i < bars.length; i++){

    bars[i-1].style.backgroundColor = "green";
    let j = i;
    while(j>0 && (parseInt(bars[j].style.height)  < parseInt(bars[j-1].style.height))) {
      bars[j].style.backgroundColor = "#f3f3f3";
      await wait(delay);      
      //bars[j-1].style.backgroundColor = "#a3a3a3";
      await wait(delay);
      bars[j].style.backgroundColor = "green";
      bars[j-1].style.backgroundColor = "#f3f3f3";
      swap(bars[j],bars[j-1]);
      await wait(delay);
      bars[j-1].style.backgroundColor = "green";
      bars[j].style.backgroundColor = "green";

      j--;
    }
    await wait(delay);
  }
  bars[bars.length-1].style.backgroundColor = "green";
}