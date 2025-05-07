import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import VerticalTabs from './Tabs.jsx';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';


  
function App(){
    return (
        <div>
            {/* <AppProvider>
                <SignInPage 
                    providers = {[
                        { id: 'github', name: 'GitHub' },
                        { id: 'google', name: 'Google' },]}
                    signIn={async (provider)=>{

                    }}
                />
            </AppProvider> */}
            <VerticalTabs />
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);