/*
program to decide which vegetable is best based on a given judging characteristic
params :a list of veggies(as an array of objects),
        a characteristic to judge the veggies .

*/

const judgeVegetable = function (vegetables, metric) {
  let highestRanking = 0;
  let highestSubmitter = "";
  for (let veg in vegetables) {

    if(highestRanking < vegetables[veg][metric]){

      highestRanking = vegetables[veg][metric];
      highestSubmitter = vegetables[veg].submitter;
      
    }
  
  }
  return highestSubmitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));