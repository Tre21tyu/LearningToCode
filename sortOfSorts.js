function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements arr[i] and arr[i+1]
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
function getIndexToIns(arr, num) {
    let sorted = bubbleSort(arr);
    for (let i = 0; i < sorted.length; i++) {
        if (num <= sorted[i]) {
            return sorted.indexOf(sorted[i]);
        }
    }   
    return sorted.length;
  }
  
//  console.log(getIndexToIns([40, 60], 50));
 console.log(getIndexToIns([5, 3, 20, 3], 5));
//  console.log(getIndexToIns([20,3,5], 19) );
 

