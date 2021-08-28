/*
 program to increasing the garbage count for waste, recycling, or compost
  depending on what trash is submitted.
*/

const smartGarbage = function (trash, bins = { waste : 0 ,recycling : 0,compost : 0 }) {

  bins[trash]++;
  return bins;
}


const result = smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(result);
