function capitalize(s){
  s = s.split("");
  return [
  s.map((e,i)=>i%2===0?e.toUpperCase():e.toLowerCase()).join(""),
  s.map((e,i)=>i%2===1?e.toUpperCase():e.toLowerCase()).join("")
  ]
};
