var mergeSort_btn = document.querySelector(".mergeSort"); 

mergeSort_btn.addEventListener("click",async function (){

  disable_newArray_btn();
  disable_size_slider();
  disable_buttons();
  var bars = document.querySelectorAll(".bar"); 
  await mergeSort(bars,0,bars.length-1);
  enable_newArray_btn();
  enable_size_slider();
  enable_buttons();
});

async function mergeSort(bars,low,high){

  
  // for(let i=0; i<=high; i++){
  //   bars[i].style.backgroundColor = "cyan";
  // }
  if(low < high){

    let mid = Math.floor((low+high)/2);
   // let left = bars.slice(low,mid);
   await mergeSort(bars,low,mid);
   await mergeSort(bars,mid+1,high);
   await merge(bars,low,mid,mid+1,high);
  //  let right = bars.slice(mid);
    // mergeSort(left);
    // mergeSort(right);
    // merge(left,right);
  }
}

async function merge(bars,low,mid,midPlus,high){

  let result = [];
  let i,j,k;
  i = low;
  j = midPlus;
  k=0;

  for(let x=low; x<=mid; x++){
    await wait(delay);
    bars[x].style.backgroundColor = "yellow";
  }
  for(let x=midPlus; x<=high; x++){
    await wait(delay);
    bars[x].style.backgroundColor = "orange";
  }
  while(i <= mid && j <= high){

    if(parseInt(bars[i].style.height) <= parseInt(bars[j].style.height)){
      result[k] = bars[i].style.height;
      i++;
    }
    else{
      result[k] = bars[j].style.height;
      j++;
    }
    k++;
  }
  while(i <= mid){

    result[k] = bars[i].style.height;
    i++; 
    k++;
  }
  while(j <= high){

    result[k] = bars[j].style.height;
    j++;
    k++;
  }
  for(i = low,j=0; i <=high; i++,j++){
    await wait(delay);
    bars[i].style.height = result[j];
    if(low+high===bars.length-1)
      bars[i].style.backgroundColor = "green";
    else{
      bars[i].style.backgroundColor = "lightGreen";
    }
  }
  console.log("result: "+result);
  
}
