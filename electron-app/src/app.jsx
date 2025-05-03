import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Maximize2, Minimize2,Settings} from 'lucide-react';

function App(){
    return (
        <div>
            <NaviBar />
            <UpperRow />
            <SortedBy />
            <h1>League Team Table</h1>
        </div>
    );
}
function NaviBar(){
    return(
        <div id="mySidenav" class="sidenav">
            <a href="#" id="closeBtn" class="closebtn" onClick={closeNav}><Minimize2 /></a>
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
            <button id="myBtn" onClick={openNav}><Maximize2 /></button>
            <button id="toggle-dark-mode">Toggle Dark Mode</button>
            <button id="settingsButton"><Settings /></button>
        </div>

    );
}
function SortedBy(){
    const sortOptions = [
        {value: "total_points", label:"Total Points", description: "Total points earned this season."},
        {value: "round_points", label:"Round Points", description: "Total points earned in the latest Gameweek."},
        {value: "price", label:"Price"},
        {value: "team_selected_percent", label:"Team Selected by %"},
        {value: "minutes_played", label:"Minutes Played"},
        {value: "goals_scored", label: "Goals Scored"}

    ]
    return(
        <div>
            <label for="sorted_by"></label>
            <h6>Sorted By:</h6>
            <select id="sorted_by" name="sorted_by">
                {sortOptions.map((option)=>(
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);