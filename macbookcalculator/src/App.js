import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Buttons';
import OutputDisplay from './components/OutputDisplay';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        
        <OutputDisplay></OutputDisplay>
        <Button ></Button> 
       
        
        
      </header>
    </div>
  );
}

export default App;
