import React from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import "./style.css";

const outputDisplay = (props) => {
    
        

    return (
        <Container className="container">
            <Row>              
                <Col><p className="output">AC</p></Col> 
                    
        
            </Row>
        </Container>
        
    )
}

export default outputDisplay;