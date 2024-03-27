/* default */
import './App.css';
/* react */
import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import { HomePage } from './Page/HomePage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}
export default App;