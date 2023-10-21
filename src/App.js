import './App.css';
import React from 'react';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <div className="app-container">
            <div className="content">
                <Home/>
                <SearchPage/>
            </div>
        </div>
    );
}

export default App;
