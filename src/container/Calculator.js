import React, { useState } from 'react'
import { Display } from '../components/Display'
import { NumPad } from '../components/NumPad'

export const Calculator = () => {
    const [displayVal, setDisplayVal] = useState(0);
    const [newOp, setNewOp] = useState(true);
    const [storedNum, setStoredNum] = useState(0);
    const [operator, setOperator] = useState(false);
    const [negateOperator, setNegateOperator] = useState(1);

    const handleClick = (e) => {


        const clear = () => {
            console.log(displayVal)
            console.log(typeof(displayVal))
            console.log(storedNum)
            console.log(typeof(storedNum ))
            setDisplayVal(0);
            setNewOp(true);
            setStoredNum(0);
            setOperator(false);
            setNegateOperator(1);
        }

        const divide = () => {
            if (operator === "/" && !newOp) {
                console.log("div");
                console.log("storedNum : " + storedNum);
                console.log("displayVal : " + displayVal);
                setDisplayVal(parseFloat(storedNum) / parseFloat(displayVal));
                setStoredNum(parseFloat(storedNum) / parseFloat(displayVal));
                console.log("operator : " + operator);
                setNewOp(true);
            } else if (operator && !newOp) {
                console.log("new operation");
                equals();

                setOperator("/");
                console.log("operator : " + operator);
            } else if (operator && newOp) {
                console.log("setOperator");
                setOperator("/");
                console.log("operator : " + operator);
            } else {
                setStoredNum(parseFloat(displayVal));
                console.log("storedNum : " + storedNum);
                setOperator("/");
                console.log("operator : " + operator);
                setNewOp(true);
            }
        }

        const multiply = () => {
            if (operator === "x" && !newOp) {
                console.log("times");
                console.log("storedNum : " + storedNum);
                console.log("displayVal : " + displayVal);
                setDisplayVal(parseFloat(storedNum) * parseFloat(displayVal));
                setStoredNum(parseFloat(storedNum) * parseFloat(displayVal));
                console.log("operator : " + operator);
                setNewOp(true);
            } else if (operator && !newOp) {
                console.log("new operation");
                equals();
               
                setOperator("x");
                console.log("operator : " + operator);
            } else if (operator && newOp) {
                console.log("setOperator");
                setOperator("x");
                console.log("operator : " + operator);
            } else {
                setStoredNum(parseFloat(displayVal));
                console.log("storedNum : " + storedNum);
                setOperator("x");
                console.log("operator : " + operator);
                setNewOp(true);
            }
        }
        const subtract = () => {
            if (operator === "-" && !newOp) {
                console.log("minus");
                console.log("storedNum : " + storedNum);
                console.log("displayVal : " + displayVal);
                setDisplayVal(parseFloat(storedNum) - parseFloat(displayVal));
                setStoredNum(parseFloat(storedNum) - parseFloat(displayVal));
                console.log("operator : " + operator);
                setNewOp(true);
            } else if (operator && !newOp) {
                console.log("new operation");
                equals();
 
                setOperator("-");
                console.log("operator : " + operator);
            } else if (operator && newOp) {
                console.log("setOperator");

                setDisplayVal("-");
                setNegateOperator(-1);
                setNewOp(false);
                console.log("operator : " + operator);
            } else {
                setStoredNum(parseFloat(displayVal));
                console.log("storedNum : " + storedNum);
                setOperator("-");
                console.log("operator : " + operator);
                setNewOp(true);
            }
        }
        const add = () => {
            if (displayVal === "-") {
                setDisplayVal("");
                setOperator("+");
            } else if (operator === "+" && !newOp) {
                console.log("Plus");
                console.log("storedNum : " + storedNum);
                console.log("displayVal : " + displayVal);
                setDisplayVal(parseFloat(storedNum) + parseFloat(displayVal));
                setStoredNum(parseFloat(storedNum) + parseFloat(displayVal));
                console.log("operator : " + operator);
                setNewOp(true);
            } else if (operator && !newOp) {
                console.log("new operation");
                equals();

                setOperator("+");
                console.log("operator : " + operator);
            } else if (operator && newOp) {
                console.log("setOperator :");
                setOperator("+");
                console.log("operator : " + operator);
            } else {
                setStoredNum(parseFloat(displayVal));
                console.log("storedNum : " + storedNum);
                setOperator("+");
                console.log("operator : " + operator);
                setNewOp(true);
            }
        }
        const equals = () => {
            switch (operator) {
                case "/":
                    console.log("equals with operator: " + operator);
                    divide();
                    break;
                case "x":
                    console.log("equals with operator: " + operator);
                    multiply();
                    break;
                case "-":
                    console.log("equals with operator: " + operator);
                    subtract();
                    break;
                case "+":
                    console.log("equals with operator: " + operator);
                    add();
                    break;
                default:
                    console.log("equals on number: " + displayVal);
                    setDisplayVal(parseFloat(displayVal));
            }
            setNewOp(true);
        }

        const decimal = () => {
            if (String(displayVal).indexOf(".") !== -1) {
                console.log("plenty of dot");
            } else {
                setDisplayVal(displayVal + e.target.innerText);
                setNewOp(false);
            }
        }

        const negate = () => {
            setDisplayVal(negateOperator * parseFloat(displayVal));
        }

        const number = () => {
            if (e.target.innerText === "0" && displayVal === 0) {
                console.log("plenty of 0");
            } else {
                if (newOp === true) {
                    setDisplayVal(e.target.innerText);
                    setNewOp(false);
                } else {
                    console.log("not 1st");
                    setDisplayVal(displayVal + e.target.innerText);
                }
            }
        }

        switch (e.target.innerText) {
            case "AC":
                console.log("handleClick on clear: " + e.target.innerText);
                clear();
                break;
            case "C":
                console.log("handleClick on clear: " + e.target.innerText);
                clear();
                break;
            case "/":
                console.log("handleClick on divide: " + e.target.innerText);
                divide();
                break;
            case "x":
                console.log("handleClick on times: " + e.target.innerText);
                multiply();
                break;
            case "-":
                console.log("handleClick on minus: " + e.target.innerText);
                subtract();
                break;
            case "+":
                console.log("handleClick on plus: " + e.target.innerText);
                add();
                break;
            case "=":
                console.log("handleClick on equals: " + e.target.innerText);
                equals();
                break;
            case ".":
                console.log("handleClick on decimal: " + e.target.innerText);
                decimal();
                break;
            case "+/-":
                console.log("handleClick on negate: " + e.target.innerText);
                negate();
                break;
            default:
                console.log("handleClick on number: " + e.target.innerText);
                number();
        }
    }

    return (
        <div>
            <h1>JavaScript Calculator</h1>
            <div className='container'>
                <div className=''>
                    <Display display={displayVal} />
                    <NumPad onClick={handleClick} />
                </div>
            </div>

        </div>
    );
}
