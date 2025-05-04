const func = async () => {
  const response = await window.versions.ping();

  console.log(response); // prints out 'pong'
};
function openSettings() {
  ipcRenderer.send("open-settings");
}
window.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.getElementById("settingsButton");

  settingsBtn.addEventListener("click", () => {
    window.electronAPI.openSettings();
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}
document.getElementById("closeBtn").addEventListener("click", function (e) {
  e.preventDefault();
  closeNav();
});
document.getElementById("myBtn").addEventListener("click", function () {
  openNav();
});

document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", async () => {
    const isDarkMode = await window.darkMode.toggle();
  });

//https://devncoffee.com/display-csv-in-html-table-with-javascript/
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
window.addEventListener("DOMContentLoaded", () => {
  func();
  demoA();
});
