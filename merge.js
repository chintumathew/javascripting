function merge(array1 , array2) {
  if(array2.length === 0){
    return array1;
  }
  else{
    for(let i = 0; i < array2.length; i++){
      array1.push(array2[i]);
    }
    array1.sort(function (a,b) {
      return a - b;
    });
    return array1;
  }
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([], [ 5, 10 ]));
