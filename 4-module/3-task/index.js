function highlight(table) {

  let list = table.tBodies[0].rows;

  for (let row of list) {

    let statusCell = null;
    let genderCell = null;
    let ageCell = null;

    for (let cell of row.cells) {



      if (cell.dataset.available === 'true') {
        statusCell = cell;
      } else if (cell.dataset.available === 'false') {
        statusCell = cell;
      } else {
        statusCell = cell;
      }

      if (cell.innerHTML === 'm') {
        genderCell = cell;
      }
      if (cell.innerHTML === 'f') {
        genderCell = cell;
      }

      if (parseInt(cell.textContent) < 18) {
        ageCell = cell;
      }

      if (statusCell) {
        if (statusCell.dataset.available === 'true') {
          row.classList.add('available');
        } else if (statusCell.dataset.available === 'false') {
          row.classList.add('unavailable');
        } else {
          row.hidden = true;
        }
      }
      if (genderCell) {
        if (genderCell.innerHTML === 'm') {
          row.classList.add('male');
        } else if (genderCell.innerHTML === 'f') {
          row.classList.add('female');
        }
      }
      if (ageCell) {
        row.style.textDecoration = 'line-through';
      }
    }
  }
}
