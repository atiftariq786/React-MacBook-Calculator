
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
            { id : "cal8", num: "×", color:"orange"},
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
            total : 0,
            prevOperator : ""
                    
        }

    //================================Click Handler=================================================
    clickHandler = (input)=>{
        console.log("button  clicked")
        console.log("Input value: "+input);
        let currentInputValue = input;
       // "AC" button replace by "C" when input true
        const tempInputNumbers = this.state.inputNumbers
            tempInputNumbers[0].num = 'C'
            
            this.setState({
                inputNumbers : tempInputNumbers
            })

        //Check input---------------------------
         if(currentInputValue === "+" || currentInputValue === "-"||currentInputValue === "×" 
        || currentInputValue === "÷" || currentInputValue === "%"||currentInputValue === "="
        || currentInputValue === "+/-"){
            this.operatorHandler(currentInputValue)
        
        }
        else if(currentInputValue === "C"){

            console.log("All values cleared...! ")            
            tempInputNumbers[0].num = 'AC';            

            this.setState({
                currentNumericInput : "",
                total : 0,
                outputDisplay : "",
                prevOperator : null ,
                inputNumbers : tempInputNumbers
            })      
        } 
        else{
            this.numericHandler(currentInputValue);          
                     
        }  
    }
    //================================Operator Handler=================================================    
    operatorHandler = (operator) => {
        console.log("Operator function activate")
        
        //Addition------------------------------
        if(this.state.prevOperator === "+" ){
            console.log("OperatorHandler Addition");
            let additionResult = parseFloat(this.state.total) + parseFloat(this.state.currentNumericInput);
            console.log(additionResult);            

            this.setState({
            // update total state
            total : additionResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : additionResult,
            // update prevOperator state
            prevOperator : this.equalHandler(operator),
            outputDisplay: additionResult
                
            })           

            return additionResult;
        }
        //Subtraction------------------------------
        else if(this.state.prevOperator === "-" ){
            console.log("OperatorHandler Subtraction");

            let subtractResult = parseFloat(this.state.total) - parseFloat(this.state.currentNumericInput);
            console.log(subtractResult);
            this.setState({
            // update total state
            total : subtractResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : additionResult,
            // update prevOperator state
            prevOperator : this.equalHandler(operator),
            outputDisplay: subtractResult
                
            })        

            return subtractResult;
        } 
        //Multiplication------------------------------
        else if(this.state.prevOperator === "×" ){
            console.log("OperatorHandler Multiplication");

            let multiplyResult = (parseFloat(this.state.total) * parseFloat(this.state.currentNumericInput));
            console.log(multiplyResult)
            this.setState({
            // update total state
            total : multiplyResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : multiplyResult,
            // update prevOperator state
            prevOperator : this.equalHandler(operator) ,
            outputDisplay: multiplyResult
                
            })               
            return multiplyResult;
        } 
        //Division------------------------------
        else if(this.state.prevOperator === "÷" ){
            console.log("OperatorHandler Division");

            let divisionResult = (parseFloat(this.state.total) / parseFloat(this.state.currentNumericInput));
            console.log(divisionResult)
            this.setState({
            // update total state
            total : divisionResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : divisionResult,
            // update prevOperator state
            prevOperator :this.equalHandler(operator) ,
            outputDisplay: divisionResult
                
            })               
            return divisionResult;
        } 
        //Percentage------------------------------
        else if(operator === "%" ){
            console.log("OperatorHandler Percentage");

            let percentageResult = (parseFloat(this.state.currentNumericInput)/ 100 );
            console.log(percentageResult)
            this.setState({
            // update total state
            total : percentageResult,
            // clear currentNumericInput state
            currentNumericInput : "",
            //currentInputValue : divisionResult,
            // update prevOperator state
            prevOperator :this.equalHandler(operator) ,
            outputDisplay: percentageResult
                
            })             
            return percentageResult;
        } 
        //Positive/ negative sign------------------------------
        else if(operator === "+/-" ){
            console.log("OperatorHandler pos/neg sign");

            let positiveNegResult = (parseFloat(this.state.currentNumericInput) * -1 );
            console.log(positiveNegResult)
            this.setState({
            // update total state
            total : positiveNegResult,
            // clear currentNumericInput state
            currentNumericInput : "",            
            // update prevOperator state
            prevOperator :this.equalHandler(operator) ,
            outputDisplay: positiveNegResult
                
            })              
            return positiveNegResult;
        } 
       
        else{
            console.log("previous operator null")
            if(!this.state.prevOperator ){

                if(this.state.currentNumericInput){
                    this.setState({
                        total: this.state.currentNumericInput,
                        prevOperator : operator
                       
                    })

                }
                else{
                    this.setState({
                        
                        prevOperator : operator
                       
                    })   
                }
                
            }
        }
        //Testing------------------------------
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
    //================================Equal Handler=================================================
    equalHandler = (operator) =>{
        console.log("Equal function activate");

        if(operator === "=" ){
            this.setState ({
                prevOperator : ""
            
            })
            return null;
        }
       else if(operator === "%"){
            this.setState ({
                prevOperator : ""
            
            })
            return null;
        }
        else if(operator === "+/-"){
            this.setState ({
                prevOperator : ""
            
            })
            return null;
        }
        
        return operator;       
    }
    //================================Render()=====================================================
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
                        //reset = {this.inputNumbers[0].num}
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

