import React, {FC, useState} from 'react';
import classes from "./Calculator.module.scss";
import CalcButton from "../components/UI/CalcButton/CalcButton";
import classNames from "classnames";

const Calculator: FC = () => {
    const [value, setValue] = useState<string>("123")
    return (
        <div className={classes.main}>
             <div className={classes.calc}>
                <div className={classes.calc__output}>{value}</div>
                 <div className={classes.calc__buttonRow}>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__darkGrayButtonBg)}>AC</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__darkGrayButtonBg)}>+/-</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__darkGrayButtonBg)}>%</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>÷</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>7</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>8</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>9</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>x</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>4</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>5</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>6</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>-</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>1</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>2</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>3</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>+</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__wideButton, classes.calc__grayButtonBg)}>0</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__grayButtonBg)}>,</CalcButton>
                     <CalcButton color={"white"} className={classNames(classes.calc__button, classes.calc__orangeButtonBg)}>=</CalcButton>
                 </div>
             </div>
        </div>
    );
};

export default Calculator;