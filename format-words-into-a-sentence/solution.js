function formatWords(words){
  
  console.log("notwords? " + !words);
  console.log('words===[]? ' + words===[]);

  if ( (!words) || (words===[]) ){return ''}

  var neat=[];

  for (i=0;i<words.length;i++) {
    if (words[i].trim()!==''){neat.push(words[i])}
  }
  
  console.log("neat: " + neat.toString());

  var l = neat.length;
  
  console.log("l="+l);

  if (l===0){return ''}
  if (l===1){return neat[0]}
  if (l===2){return (`${neat[0]} and ${neat[1]}`)}

  var out = '';

  for (var i=0;i<l-1;i++) {
    var e=neat[i];
    if (i === l-2) {out += e + ' and ' + neat[i+1]}
    else {out += e + ', '}
  }
  return out;
}
