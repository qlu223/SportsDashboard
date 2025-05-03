import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App(){
    return (
        <div>
            <NaviBar />
            <UpperRow />
            <h1>League Team Table</h1>
        </div>
    );
}
function NaviBar(){
    return(
        <div id="mySidenav" class="sidenav">
            <a href="#" id="closeBtn" class="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">Overview</a>
            <a href="#">Players </a>
            <a href="index.html">Teams</a>
            <a href="#">Visualizations</a>
            <a href="settings.html">Settings</a>
        </div>
    );
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
function closeNav() {
document.getElementById("mySidenav").style.width = "0px";
}
function UpperRow(){
    return (
        <div id="UpperRow">
            <button id="myBtn" onClick={openNav}>open navi bar</button>
            <button id="toggle-dark-mode">Toggle Dark Mode</button>
            <button id="settingsButton">[Gear]</button>
        </div>

    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);