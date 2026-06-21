 var audi = [
  ["R1S1", "R1S2", "R1S3"],
  ["R2S1", "R2S2", "R2S3"],
  ["R3S1", "R3S2", "R3S3"]
];

var totalSeats = 9;
var bookedSeats = 0;

function printSeats() {
  var seats = "";

  for (var i = 0; i < audi.length; i++) {
    for (var j = 0; j < audi[i].length; j++) {
      seats += audi[i][j] + " ";
    }
    seats += "\n";
  }

  return seats;
}

while (bookedSeats < totalSeats) {

  var selectedOption = prompt(
`Please select:
0. Exit
1. Book seat`
  );

  if (selectedOption === "0") {
    break;
  }

  else if (selectedOption === "1") {

    console.log(printSeats());

    var r = +prompt("Enter row (1-3):");
    var c = +prompt("Enter column (1-3):");

    if (!audi[r - 1] || !audi[r - 1][c - 1]) {
      console.log("Wrong input");
    }

    else if (audi[r - 1][c - 1] === "X") {
      console.log("Already booked");
    }

    else {
      audi[r - 1][c - 1] = "X";
      bookedSeats++;

      console.log(printSeats());

      if (bookedSeats === totalSeats) {
        console.log("All seats are booked. System closed.");
        break;
      }
    }
  }

  else {
    console.log("Wrong input");
  }
}
    