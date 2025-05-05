// Add this to the end of the existing file
import "./app.jsx";
function demoA() {
  // (PART A) FETCH CSV FROM SERVER
  Papa.parse("./data/prem_table.csv", {
    download: true,
    skipEmptyLines: true,

    // (PART B) DRAW CSV FILE
    complete: (csv) => {
      // (B1) GET + RESET HTML TABLE
      var table = document.getElementById("team");
      table.innerHTML = "";

      // (B2) DRAW TABLE ROWS
      for (let row of csv.data) {
        let tr = table.insertRow();
        for (let cell of row) {
          let td = tr.insertCell();
          td.innerHTML = cell;
        }
      }
    },
  });
}
