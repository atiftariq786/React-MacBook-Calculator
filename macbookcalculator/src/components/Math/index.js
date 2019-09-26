
import React, {Component} from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
//import Col  from 'react-bootstrap/Col';
import Button from '../Button/index';
import Output from '../OutputDisplay/index';
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

    //================================Click Handler=================================================
    clickHandler = (input)=>{
        console.log("button  clicked")
        console.log("Input value: "+input);
        let currentInputValue = input;

        //Check input---------------------------
        if(currentInputValue === "+" || currentInputValue === "-"||currentInputValue === "*" 
        || currentInputValue === "/" || currentInputValue === "%"||currentInputValue === "="
        || currentInputValue === "+/-" || currentInputValue === "AC"){
            this.operatorHandler(currentInputValue)
        } 
        else{
            this.numericHandler(currentInputValue);          
        }  

    }
    //================================Operator Handler=================================================    
    operatorHandler = (operator) => {
        console.log("Operator function activate")

        this.setState ({
            currentNumericInput : ""

        })

    }
    //================================Numeric Handler=================================================
    numericHandler = (num) => {
        console.log("numeric function activate")
        console.log({num})

        let checkNumeric = this.state.currentNumericInput + num;
    
        this.setState ({
            currentNumericInput :  checkNumeric

        })

        this.resultHandler(checkNumeric)
    }
    //================================Result Handler=================================================
    resultHandler = (displayNum) => {
        console.log("Result function activate")    
        
        //<Display value={this.state.next || this.state.total || "0"} />
        //console.log({displayNum})
        this.setState ({
            outputDisplay : displayNum//this.state.currentNumericInput,
        
        })
    }
    render(){
        
        return (
                
            <Container>
                <Row>
                    <Output outputShow={this.state.outputDisplay || "0" }></Output>
                </Row>
                <Row>
                    {  this.state.inputNumbers.map((btnSymbol,id) =>{
                        //console.log("Index :" + id, btnSymbol)                
                        return (                   
                        <Button 
                        symbol={btnSymbol.num} 
                        color={btnSymbol.color} 
                        click = {()=>this.clickHandler(btnSymbol.num)}
                        key ={id}                
                        ></Button>                
                        );
                    })}            
                
                </Row>         
            </Container>   
        )
    }    
}
export default Math;

