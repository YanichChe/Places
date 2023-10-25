import './App.css';
import React from 'react';
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import InfoPage from "./pages/InfoPage";

function App() {
    return (
        <div className="app-container">
            <div className="content">
                <HomePage/>
                <SearchPage/>
                <InfoPage/>
            </div>
        </div>
    );
}
export default App;
