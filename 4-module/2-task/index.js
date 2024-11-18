function makeDiagonalRed(table) {

  let i = 0;
  for (let row of table.rows) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
    i++;
  }
}
