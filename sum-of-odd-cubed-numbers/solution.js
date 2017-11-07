function cubeOdd(arr) {
  let out = 0;
  
  for (i=0;i<arr.length;i++) {
    
    let a = arr[i];
  
    if (typeof a !== 'number') {
      return undefined
    }
    
    if (Math.abs(a%2)===1) {
      out += Math.pow(a,3);
    }
    
  }
    
  return out;
    
}
