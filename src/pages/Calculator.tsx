import React, {FC, useState} from 'react';
import classes from "./Calculator.module.scss";

const Calculator: FC = () => {
    const [value, setValue] = useState<string>("")
    return (
        <div className={classes.main}>
             <div className={classes.calc}>
                <div className={classes.calc__output}>123</div>
                 <div className={classes.calc__buttonRow}>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__wideButton}>678</button>
                     <button className={classes.calc__button}>123</button>
                     <button className={classes.calc__button}>123</button>
                 </div>
             </div>
        </div>
    );
};

export default Calculator;