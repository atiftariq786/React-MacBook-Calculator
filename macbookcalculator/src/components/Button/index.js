
import React from "react";
//import Container  from 'react-bootstrap/Container';
//import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

import "./style.css";

const button = (props) => {
    
    let gridSys = props.color; // props.color required to change suitable name
    let symbol = props.symbol;

    if(props.click === true && props.key !== "cal1"){
        symbol = "C";
    }
    else{
       // symbol = "AC";
    }
    
    if(gridSys === "col-wide"){
        gridSys = 6;
    }

    else{
        gridSys = 3;
    }

    
    
    return (
            <Col xs ={gridSys}>
            <button className ={props.color} onClick = {props.click}>{symbol}</button>
            
            
            </Col>
            
               
                            
                                                    

                
           
    )    
}

export default button;

