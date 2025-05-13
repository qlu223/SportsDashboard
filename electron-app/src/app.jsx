import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import VerticalTabs from './Tabs.jsx';

  
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