import React from "react";

import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import "./style.css";

const buttons = (props) => {

/*

<div>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        </div>
*/

    return (
    
        <Container className="container container">
            <Row>              
                <Col lg ="3"><button className="numButton">AC</button></Col> 
                <Col lg ="3"><button className="numButton">+/-</button></Col> 
                <Col lg = "3"><button className="numButton">%</button></Col> 
                <Col lg ="3"><button className="symButton">/</button></Col>      
        
            </Row>
            <Row>              
                <Col lg ="3"><button className="numButton">7</button></Col> 
                <Col lg ="3"><button className="numButton">8</button></Col> 
                <Col lg ="3"><button className="numButton">9</button></Col> 
                <Col lg ="3"><button className="symButton">*</button></Col>      
        
            </Row>
            <Row>              
                <Col lg ="3"><button className="numButton">4</button></Col> 
                <Col lg ="3"><button className="numButton">5</button></Col> 
                <Col lg ="3"><button className="numButton">6</button></Col> 
                <Col lg ="3"><button className="symButton">-</button></Col>      
        
            </Row>
            
             <Row>              
                <Col lg ="3"><button className="numButton">1</button></Col> 
                <Col lg ="3"><button className="numButton">2</button></Col> 
                <Col lg ="3"><button className="numButton">3</button></Col> 
                <Col lg ="3"><button className="symButton">+</button></Col>      
        
            </Row>
            <Row>              
                <Col md={6}><button className="numButton">0</button></Col>                
                <Col md={3}><button className="numButton">.</button></Col> 
                <Col md={3}><button className="symButton">=</button></Col>      
    
            </Row>

        </Container>

        

        

        

        
        
    
    )
}

export default buttons;