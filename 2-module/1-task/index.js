
function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    if (Number.isFinite(salaries[key])) {
      sum += salaries[key];

    } else if (salaries[key] === 0) {
      return 0;
    }
  }
  return sum;
}




