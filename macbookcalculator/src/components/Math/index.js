
import React, {Component} from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
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

        console.log("Input value: "+input);
        let currentInputValue = input;        

       // "AC" button replace by "C" when input true
        const tempInputNumbers = this.state.inputNumbers
        
        //Check input---------------------------
         if(currentInputValue === "+" || currentInputValue === "-"||currentInputValue === "×" 
        || currentInputValue === "÷" || currentInputValue === "%"||currentInputValue === "="
        || currentInputValue === "+/-"){           

            if(this.state.currentNumericInput !== ""){
                this.operatorHandler(currentInputValue)
            }        
        }
        else if(currentInputValue === "C" || currentInputValue === "AC" ){

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
            tempInputNumbers[0].num = 'C'            
            this.setState({
                inputNumbers : tempInputNumbers
            })       
                     
        }  
    }
    //================================Operator Handler=================================================    
    operatorHandler = (operator) => {
        console.log("Operator function activate")

        let resultAll = this.state.currentNumericInput;
        
        //Addition------------------------------
        if(this.state.prevOperator === "+" ){
            console.log("OperatorHandler Addition");

            resultAll = parseFloat(this.state.total) + parseFloat(this.state.currentNumericInput);  
        }        
        //Subtraction------------------------------
        else if(this.state.prevOperator === "-" ){
            console.log("OperatorHandler Subtraction");

            resultAll = parseFloat(this.state.total) - parseFloat(this.state.currentNumericInput);
        } 
        //Multiplication------------------------------
        else if(this.state.prevOperator === "×" ){
            console.log("OperatorHandler Multiplication");

            resultAll = (parseFloat(this.state.total) * parseFloat(this.state.currentNumericInput));
        } 
        //Division------------------------------
        else if(this.state.prevOperator === "÷" ){
            console.log("OperatorHandler Division");

            resultAll = (parseFloat(this.state.total) / parseFloat(this.state.currentNumericInput)); 
        } 
         //Positive/ negative sign------------------------------
          if(operator === "+/-" ){
            console.log("OperatorHandler pos/neg sign");      

            let positiveNegResult = (parseFloat(this.state.currentNumericInput) * -1 ); 
            console.log(positiveNegResult)
            
            this.setState({
            prevOperator :this.equalHandler(operator) ,
            outputDisplay: positiveNegResult,
        
            })              
            return positiveNegResult;
        }              
        //Percentage------------------------------
         if(operator === "%"){
            console.log("OperatorHandler Percentage"); 
                
             resultAll = parseFloat(resultAll)/ 100 ;
           
             this.setState({                
                 total : resultAll,                
                 currentNumericInput : "",                
                 prevOperator :this.equalHandler(operator) ,
                 outputDisplay: resultAll                     
                 })                   
        }  
        // Update states for add, subtract, Multiply and Divide---------------              
        if(this.state.prevOperator){

            this.setState({                
                total : resultAll,                
                currentNumericInput : "",               
                prevOperator :this.equalHandler(operator) ,
                outputDisplay: resultAll                    
                })                 
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
        let checkNumeric =  this.state.currentNumericInput.toString() + num.toString(); 

        
        
               
        this.setState ({           
            currentNumericInput : checkNumeric
        })

        this.resultHandler(checkNumeric)
         
    }
    //================================Result Handler=================================================
    resultHandler = (displayNum) => {
        console.log("Result function activate")    
        
        this.setState ({
            outputDisplay : displayNum        
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
        if(operator === "%"){           
            this.setState ({
                prevOperator : ""            
            })
            return null;        
        }
        if(operator === "+/-"){
            this.setState ({
                prevOperator : "-"
            })
           return "-";
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

