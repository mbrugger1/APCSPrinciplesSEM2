//Markus Brugger

function selectionSort(txt){
  var min;
  var temp;
      length = arr.length;
  for(var i = 0; i < length; i++){
    min = i;
    for(var  j = i+1; j<length; j++){
       if(arr[j]<arr[min]){
          min = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
