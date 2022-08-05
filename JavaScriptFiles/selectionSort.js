var selectSort_btn = document.querySelector(".selectionSort");

selectSort_btn.addEventListener("click",async function(){

  disable_newArray_btn();
  disable_size_slider();
  disable_buttons();
  await select();
  enable_newArray_btn();
  enable_size_slider();
  enable_buttons();

});

async function select(){

  var bars = document.querySelectorAll(".bar");
  for(let i = 0; i < bars.length-1; i++){
    var min_index = i;
    bars[i].style.backgroundColor = "blue";
    for(let j = i+1; j < bars.length; j++){
      bars[j].style.backgroundColor = "cyan";
      await wait(delay);
      if(parseInt(bars[min_index].style.height) > parseInt(bars[j].style.height)){
        if(min_index != i){
        bars[min_index].style.backgroundColor = "rgb(255,0,234)";
        }
        min_index = j;
      }
      else{
        bars[j].style.backgroundColor = "rgb(255,0,234)";
      }
    }
    bars[min_index].style.backgroundColor = "blue";
    await wait(delay);
    console.log("");
    await wait(delay);
    swap(bars[min_index],bars[i]);
    await wait(delay);
    bars[min_index].style.backgroundColor = "rgb(255,0,234)";
    bars[i].style.backgroundColor = "green";
  }
  bars[bars.length-1].style.backgroundColor = "green";
}