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

}
