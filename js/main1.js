const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (x,y) {
  return array.indexOf(x) === y;
});

console.log(result);

