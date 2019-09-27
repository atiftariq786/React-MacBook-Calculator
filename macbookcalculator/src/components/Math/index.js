
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
            { id : "cal4", num: "÷", color:"orange"},
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
            outputDisplay : "",
            total : "",
            prevOperator : ""
                    
        }

    //================================Click Handler=================================================
    clickHandler = (input)=>{
        console.log("button  clicked")
        console.log("Input value: "+input);
        let currentInputValue = input;

        //Check input---------------------------
        if(currentInputValue === "+" || currentInputValue === "-"||currentInputValue === "*" 
        || currentInputValue === "÷" || currentInputValue === "%"||currentInputValue === "="
        || currentInputValue === "+/-"){
            this.operatorHandler(currentInputValue)
        }
        else if(currentInputValue === "AC"){

            console.log("All values cleared...! ")
            

            this.setState({
                currentNumericInput : 0,
                currentInputValue : 0,
                total : 0,
                outputDisplay : 0,
                prevOperator : null 
            })      
        } 
        else{
            this.numericHandler(currentInputValue);          
        }  
    }
    //================================Operator Handler=================================================    
    operatorHandler = (operator) => {
        console.log("Operator function activate")

        if(this.state.prevOperator === "+" ){
            console.log("OperatorHandler Addition");
            let additionResult = parseInt(this.state.total) + parseInt(this.state.outputDisplay);
            console.log(additionResult);            

            this.setState({
            // update total state
            total : additionResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : additionResult,
            // update prevOperator state
            prevOperator : operator,
            outputDisplay: additionResult
                
            })           

            return additionResult;
        }
        
        else if(this.state.prevOperator === "-" ){
            console.log("OperatorHandler Subtraction");

            let subtractResult = parseInt(this.state.total) - parseInt(this.state.currentInputValue);
            console.log(subtractResult);
            this.setState({
            // update total state
            total : subtractResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : additionResult,
            // update prevOperator state
            prevOperator : operator,
            outputDisplay: subtractResult
                
            })        

            return subtractResult;
        } 
        else if(this.state.prevOperator === "*" ){
            console.log("OperatorHandler Multiplication");

            let multiplyResult = (parseInt(this.state.total) * parseInt(this.state.currentInputValue));
            console.log(multiplyResult)
            this.setState({
            // update total state
            total : multiplyResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : multiplyResult,
            // update prevOperator state
            prevOperator : operator,
            outputDisplay: multiplyResult
                
            })               
            return multiplyResult;
        } 
        else{
            console.log("previous operator null")
            if(!this.state.prevOperator ){
                this.setState({
                    total: this.state.currentNumericInput,
                    prevOperator : operator
                   
                })
            }
        }

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
            currentNumericInput : checkNumeric

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

