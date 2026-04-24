let cells = document.getElementsByClassName("box");

let count = 1;

function addXandO(index) {
  console.log("working");
  let cell = cells[index];

  if (count % 2 === 0) {
    cell.textContent = "O";

    cell.classList.remove("blue");

    cell.classList.add("yellow");
  } else {
    cell.textContent = "X";

    cell.classList.remove("yellow");

    cell.classList.add("blue");
  }
  let status = document.getElementsByClassName("status")[0];
  if (
    cells[0].textContent !== "" &&
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent
  ) {
    status.textContent = cells[0].textContent + " won";
  } else if (
    cells[3].textContent !== "" &&
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent
  ) {
    status.textContent = cells[3].textContent + " won";
  } else if (
    cells[6].textContent !== "" &&
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent
  ) {
    status.textContent = cells[6].textContent + " won";
  } else if (
    cells[0].textContent !== "" &&
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent
  ) {
    status.textContent = cells[0].textContent + " won";
  } else if (
    cells[1].textContent !== "" &&
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent
  ) {
    status.textContent = cells[1].textContent + " won";
  } else if (
    cells[2].textContent !== "" &&
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent
  ) {
    status.textContent = cells[2].textContent + " won";
  } else if (
    cells[0].textContent !== "" &&
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent
  ) {
    status.textContent = cells[0].textContent + " won";
  } else if (
    cells[2].textContent !== "" &&
    cells[2].textContent === cells[4].textContent &&
    cells[4].textContent === cells[6].textContent
  ) {
    status.textContent = cells[2].textContent + " won";
  } else if (count === 9) {
    status.textContent = "Draw!";
  }

  count++;
}
