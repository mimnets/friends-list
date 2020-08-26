import React from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './componenets/Friends/Friends';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [fCount, setfCount] = useState([]);

  useEffect(()=> {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setfCount(data.results))
    .catch(error => console.log(error))
},[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h1>Friends Name :</h1>
        {
          fCount.map(myfriend => <Friends friend = {myfriend}></Friends>)
        }
        
      </div>
    </div>
  );
}

export default App;
