import React from 'react';
import logo from './logo.svg';
import './App.css';
import Producttable from './producttable';
function App() {
        const products=[{name:"iphone XR",categorie:"smart phone",prix:"2500TND"},{name:"newbalence",categorie:"clothes",prix:"340TND"}]
        return ( <Producttable table={products}/>)
}

export default App;
