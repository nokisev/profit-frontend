import React from 'react';
import { Routers } from './Routes';
import Header from './Components/Header';
import Catalog from './Components/Catalog';
import Home from './Pages/Home';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routers />
        </div>    
);
}

export default App;
