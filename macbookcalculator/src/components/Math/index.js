
import React, {Component} from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Button from '../Button/index';
import Output from '../OutputDisplay/index';
import "./style.css";

class Math extends Component {        

        state = {
            inputNumbers :[
            { id : "cal1", input: "AC", btnClass:"white"},
            { id : "cal2", input: "+/-", btnClass:"white"},
            { id : "cal3", input: "%", btnClass:"white"},
            { id : "cal4", input: "÷", btnClass:"orange"},
            { id : "cal5", input: 7, btnClass:"white"},
            { id : "cal6", input: 8, btnClass:"white"},
            { id : "cal7", input: 9, btnClass:"white"},
            { id : "cal8", input: "×", btnClass:"orange"},
            { id : "cal9", input: 4, btnClass:"white"},
            { id : "cal10", input: 5, btnClass:"white"},
            { id : "cal11", input: 6, btnClass:"white"},
            { id : "cal12", input: "-", btnClass:"orange"},
            { id : "cal13", input: 1, btnClass:"white"},
            { id : "cal14", input: 2, btnClass:"white"},
            { id : "cal15", input: 3, btnClass:"white"},
            { id : "cal16", input: "+", btnClass:"orange"},
            { id : "cal17", input: 0, btnClass:"col-wide"},
            { id : "cal18", input: ".", btnClass:"white"},
            { id : "cal19", input: "=", btnClass:"orange"}],            
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
            console.log("click-1")    

            let positiveNegResult = (parseFloat(this.state.currentNumericInput) * -1 ).toString();
            
            console.log(positiveNegResult)
            
            this.setState({
            prevOperator :this.equalHandler(operator) ,
            currentNumericInput : positiveNegResult, 
            outputDisplay: positiveNegResult,
        
            })     
            console.log("click-1")         
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


        let dotCheck = this.state.currentNumericInput;

        console.log({dotCheck});

        let checkNumeric =  this.state.currentNumericInput.toString() + num.toString(); 

        if(num === "." && dotCheck.indexOf(".") !== -1){

            checkNumeric = this.state.currentNumericInput.toString(); 
        }
        if(num === "." && this.state.currentNumericInput===""){        
            checkNumeric = "0.";  
          }
        
        if(num === 0 && this.state.currentNumericInput === ""){             
            checkNumeric = "0";         
          }
        
        if(num === 0 && this.state.currentNumericInput === "0"){             
            checkNumeric = "0";         
          }

        if(num > 0 && this.state.currentNumericInput === "0"){             
          checkNumeric = num;         
        }
                 
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
                    {  this.state.inputNumbers.map((btnObject,id) =>{
                              console.log({btnObject})       
                        return (                   
                        <Button 
                        
                        symbol={btnObject.input} 
                        btnClass={btnObject.btnClass} 
                        click = {()=>this.clickHandler(btnObject.input)}
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

