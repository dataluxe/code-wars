function insertDash(num) {

   var out = num.toString();
   
   if (out.length < 2) {
     return out
   };
   
   function isOdd(test) {
     return (parseInt(test) % 2) == 1;
   };
   
   for (i=0; i<out.length; i++) {
     
     var a = parseInt(out[i]);
     var b = parseInt(out[i+1]);
     
     if (isOdd(a)&&isOdd(b)) {
       out = out.slice(0, i+1) + "-" + out.slice(i+1);;
     };
     
   }
   
   return out;
   
}
