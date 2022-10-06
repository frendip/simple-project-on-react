import React, {FC, useState} from 'react';
import classes from "../styles/Calculator/Calculator.module.scss";
import CalcButton from "../components/UI/CalcButton/CalcButton";
import classNames from "classnames";
import {
    inputNum,
    inputSign,
    clearOutput,
    switchSign,
    takePercent,
    setDot,
    outputCalculation
} from "../logic/calcLogic";

const Calculator: FC = () => {
    const [value, setValue] = useState<string>("0");
    return (
        <div className={classes.main}>
             <div className={classes.calc}>
                <div className={classes.calc__output}>{value}</div>
                 <div className={classes.calc__buttonRow}>
                     <CalcButton onClick={() => clearOutput(setValue)} color={"white"} className={classNames(classes.calc__button, classes.calc__darkGrayButtonBg)}>AC</CalcButton>
                     <CalcButton onClick={() => switchSign(value, setValue)} color={"white"} className={classNames(classes.calc__button, classes.calc__darkGrayButtonBg)}>+/-</CalcButton>
                     <CalcButton onClick={() => takePercent(value, setValue)} color={"white"} className={classNames(classes.calc__button, classes.calc__darkGrayButtonBg)}>%</CalcButton>
                     <CalcButton onClick={() => inputSign(value, setValue, "/")} color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>÷</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "7")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>7</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "8")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>8</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "9")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>9</CalcButton>
                     <CalcButton onClick={() => inputSign(value, setValue, "*")} color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>x</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "4")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>4</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "5")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>5</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "6")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>6</CalcButton>
                     <CalcButton onClick={() => inputSign(value, setValue, "-")} color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>-</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "1")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>1</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "2")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>2</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "3")} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>3</CalcButton>
                     <CalcButton onClick={() => inputSign(value, setValue, "+")} color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>+</CalcButton>
                     <CalcButton onClick={() => inputNum(value, setValue, "0")} color={"white"} className={classNames(classes.calc__button, classes.calc__wideButton, classes.calc__grayButtonBg)}>0</CalcButton>
                     <CalcButton onClick={() => setDot(value, setValue)} color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>,</CalcButton>
                     <CalcButton onClick={() => outputCalculation(value, setValue)} color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>=</CalcButton>
                 </div>
             </div>
        </div>
    );
};

export default Calculator;