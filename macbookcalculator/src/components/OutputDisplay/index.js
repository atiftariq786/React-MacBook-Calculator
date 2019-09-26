
import React from "react";
//import Container  from 'react-bootstrap/Container';
//import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
//import Button from "../Buttons/index";
//import Input from "../InputDisplay/index";
import "./style.css";


const outputDisplay = (props) => {
    
    
    return (
        
                <Col>  
                    <p className= "output">{props.outputShow}</p>                                       
                </Col>    
        
          
        
    )
}

export default outputDisplay;

