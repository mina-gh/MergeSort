function split(array){
  let midPoint = Math.floor(array.length/2);

  let result = [];

  if (array.length === 1){
    result = array;
  } else if (array.length > 1){
    // a[0] ... a[midPoint];
    let left = array.slice(0, midPoint);
    // a[midPoint+1] ... a[length-1];
    let right = array.slice(midPoint, array.length);

    result.push(left);
    result.push(right);
  }

  return result;
}

function mergeSort(array, comp){
  if(array.length < 2){
    return array;
  }
let splitted = split(array);
let left = splitted[0];
let right = splitted[1];

return merge(mergeSort(left,comp),mergeSort(right, comp), comp);
}

function merge(array1, array2, comp){
  //Assuming that both Arrays are already sorted
  let tempArray = [];
  let tempArrayCounter = 0;
  let pointerLeft = 0;
  let pointerRight = 0;


  while(pointerLeft < array1.length && pointerRight < array2.length){

    if(comp && (typeof comp === 'function')){
      if(comp(array1[pointerLeft],array2[pointerRight]) <= 0){
        tempArray[tempArrayCounter] = array1[pointerLeft];
        pointerLeft++;
        tempArrayCounter++;
      } else {
        tempArray[tempArrayCounter] = array2[pointerRight];
        pointerRight++;
        tempArrayCounter++;
      }
    } else {
      if (array1[pointerLeft] <= array2[pointerRight]){
        tempArray[tempArrayCounter] = array1[pointerLeft];
        pointerLeft++;
        tempArrayCounter++;
      } else {
        tempArray[tempArrayCounter] = array2[pointerRight];
        pointerRight++;
        tempArrayCounter++;
      }
    }
}
  if(pointerLeft < array1.length){
    tempArray = tempArray.concat(array1.slice(pointerLeft, array1.length));
  }
  if(pointerRight < array2.length){
    tempArray = tempArray.concat(array2.slice(pointerRight,array2.length));
  }
  return tempArray;
}


