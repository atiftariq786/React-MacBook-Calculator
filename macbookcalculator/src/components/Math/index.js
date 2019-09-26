
import React, {Component} from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
//import Col  from 'react-bootstrap/Col';
import Button from '../Button/index';
import Output from '../OutputDisplay/index';
//import Classes from "./style.css";

import "./style.css";

class Math extends Component {
    

     state = {
         inputNumbers :[
        { id : "cal1", num: "AC", color:"white"},
        { id : "cal2", num: "+/-", color:"white"},
        { id : "cal3", num: "%", color:"white"},
        { id : "cal4", num: "/", color:"orange"},
        { id : "cal5", num: 7, color:"white"},
        { id : "cal6", num: 8, color:"white"},
        { id : "cal7", num: 9, color:"white"},
        { id : "cal8", num: "*", color:"orange"},
        { id : "cal9", num: 4, color:"white"},
        { id : "cal10", num: 5, color:"white"},
        { id : "cal11", num: 6, color:"white"},
        { id : "cal12", num: "-", color:"orange"},
        { id : "cal13", num: 1, color:"white"},
        { id : "cal14", num: 2, color:"white"},
        { id : "cal15", num: 3, color:"white"},
        { id : "cal16", num: "+", color:"orange"},
        { id : "cal17", num: 0, color:"col-wide"},
        { id : "cal18", num: ".", color:"white"},
        { id : "cal19", num: "=", color:"orange"}],
        currentNumericInput: "",    
        outputDisplay : ""
       
                   
    }

    render(){
       

        return (
            
            <Container>
            
            
            
            
            </Container>
           
            
           
           
            
        )

    }
    
}

export default Math;

