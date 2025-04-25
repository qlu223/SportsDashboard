const func = async () => {
    const response = await window.versions.ping()

    console.log(response) // prints out 'pong'
  }
  
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}
document.getElementById('closeBtn').addEventListener('click', function (e) {
  e.preventDefault(); // prevent default anchor behavior
  closeNav();
});
document.getElementById('myBtn').addEventListener('click', function () {
  openNav();
});
function demoA () {
// (PART A) FETCH CSV FROM SERVER
    Papa.parse("./data/prem_table.csv", {
    download: true,
    skipEmptyLines: true,

    // (PART B) DRAW CSV FILE
    complete : csv => {
    // (B1) GET + RESET HTML TABLE
    var table = document.getElementById("hi");
    table.innerHTML = "";

    // (B2) DRAW TABLE ROWS
    for (let row of csv.data) {
        let tr = table.insertRow();
        for (let cell of row) {
        let td = tr.insertCell();
        td.innerHTML = cell;
        }
    }
    }
});
}
window.addEventListener("DOMContentLoaded", () => {
    func();
    demoA();
  });

