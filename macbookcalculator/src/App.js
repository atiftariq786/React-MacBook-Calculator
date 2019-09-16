import React from 'react';
import './App.css';
import Button from './components/Buttons';
import OutputDisplay from './components/OutputDisplay';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          React MacBook Calculator
        </p>
        <OutputDisplay></OutputDisplay>
        <Button ></Button> 
       
        
        
      </header>
    </div>
  );
}

export default App;
