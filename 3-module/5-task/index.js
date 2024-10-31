function getMinMax(str) {

  let arr = str.split(' ');
  let numbers = [];
  let min;
  let max;

  arr.forEach(function (item) {
    let num = parseFloat(item);
    if (num === num) {
      numbers.push(num);
    }
  });

  min = Math.min(...numbers);
  max = Math.max(...numbers);
  return {min, max};
}
