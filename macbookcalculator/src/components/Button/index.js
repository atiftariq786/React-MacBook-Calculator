
import React from "react";
import Col  from 'react-bootstrap/Col';
import "./style.css";

const button = (props) => {
    
    let gridSys = props.btnClass;     
   
    if(gridSys === "col-wide"){
        gridSys = 6;
    }
    else{
        gridSys = 3;
    }   
    
return (
        <Col xs ={gridSys}>
            <button className ={props.btnClass} onClick = {props.click}>{props.symbol}</button>                        
        </Col>                                                           
    )    
}
export default button;

