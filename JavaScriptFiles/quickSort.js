var quickSort_btn = document.querySelector(".quickSort");

quickSort_btn.addEventListener("click",async function(){
  var bars = document.querySelectorAll(".bar");
  disable_newArray_btn();
  disable_size_slider();
  disable_buttons();
  await quickSort(bars,0,bars.length-1);
  enable_newArray_btn();
  enable_size_slider();
  enable_buttons();
});

async function quickSort(bars,low,high){
  console.log("quick sort called for values low: "+low+" high: "+high);
  if(low < high){

    let i,j,pivot;
    pivot = low;
    i = low;
    j = high;
     await wait(delay);
     bars[pivot].style.backgroundColor = "red";
    while(i < j){
      while(parseInt(bars[i].style.height) <= parseInt(bars[pivot].style.height) && i<high){
        if(i != pivot)
          bars[i].style.backgroundColor = "yellow";
        await wait(delay);
        if(i != pivot)
          bars[i].style.backgroundColor = "rgb(255,0,234)";
        await wait(delay);        
        i++;
      }
      await wait(delay);
      bars[i].style.backgroundColor = "yellow";

      while(parseInt(bars[j].style.height) > parseInt(bars[pivot].style.height) && j > low){
        bars[j].style.backgroundColor = "orange";
        await wait(delay);
        bars[j].style.backgroundColor = "rgb(255,0,234)";
        await wait(delay);
        j--;
      }
      await wait(delay);
      bars[j].style.backgroundColor = "orange"; 


      if(i < j){
        await wait(delay*2);
        swap(bars[i],bars[j]);
      }
  }

  await wait(delay);
  swap(bars[j],bars[pivot]);
  bars[pivot].style.backgroundColor = "rgb(255,0,234)";
  bars[j].style.backgroundColor = "green";
  await quickSort(bars,low,j-1);
  await quickSort(bars,j+1,high);
  }
  else{
    await wait(delay);
    if((low <= 0 && low < bars.length) || low==high)
      bars[low].style.backgroundColor = "green";
  }  
}