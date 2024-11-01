function showSalary(users, age) {
  let result = '';

  users.forEach(function (user) {
    if (user.age <= age) {
      result += user.name + ', ' + user.balance + '\n';
    }
  });
  return result.trim();
}


