import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import VerticalTabs from './Tabs.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx"

  
function App(){
    return (
        <div>
            <VerticalTabs />
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);