
import React from "react";
//import Container  from 'react-bootstrap/Container';
//import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

import "./style.css";

const button = (props) => {
    
    
    return (
            <Col xs ={3}>
            <button className ={props.color} onClick = {props.click}>{props.symbol}</button>
            
            
            </Col>
            
               
                            
                                                    

                
           
    )    
}

export default button;

