import React from "react";

class CreateCalc {
    private firstValue: number | null = null;
    private secondValue: number | null = null;
    private sign: '%' | '/' | '*' | '-' | '+' | null = null;

    setFirstValue(newVal: number | null): void {
        this.firstValue = newVal;
    }
    getFirstValue(): number | null {
        return this.firstValue;
    }

    setSecondValue(newVal: number | null): void {
        this.secondValue = newVal;
    }
    getSecondValue(): number | null {
        return this.secondValue;
    }

    setSign(newSign: '%' | '/' | '*' | '-' | '+' | null): void {
        this.sign = newSign;
    }
    getSign(): '%' | '/' | '*' | '-' | '+' | null{
        return this.sign
    }

    reset(): void {
        this.sign = null;
        this.firstValue = null;
        this.secondValue = null;
    }

    calculations(): string {
        if(this.firstValue) {
            switch (this.sign) {
                case "%":
                    return `${this.firstValue / 100}`;
                case "/":
                    if(!this.secondValue) {
                        return "Не определено";
                    } else {
                        return `${this.firstValue / this.secondValue}`
                    }
                case "*":
                    if(this.secondValue) {
                        return `${this.firstValue * this.secondValue}`
                    }
                    break;
                case "-":
                    if(this.secondValue) {
                        return `${this.firstValue - this.secondValue}`
                    }
                    break;
                case "+":
                    if(this.secondValue) {
                        return `${this.firstValue + this.secondValue}`
                    }
                    break;
                default:
            }
        }
        return ""
    }
}

class CreateOverwriting {
    private value: boolean = false;
    getValue(): boolean {
        return this.value;
    }
    setValue(newValue: boolean) {
        this.value = newValue;
    }
}

const overwriting = new CreateOverwriting();
const calcLogic = new CreateCalc();

const inputNum = (value: string, setValue: React.ComponentState, num: string): void => {
    if(value === '0' || overwriting.getValue()) {
        setValue(num);
        overwriting.setValue(false);
    } else {
        setValue(value + num);
    }
}

const inputSign = (value: string, setValue: React.ComponentState, sign: '%' | '/' | '*' | '-' | '+'): void => {
    if(calcLogic.getSign() !== null && !overwriting.getValue()) {
        calcLogic.setSecondValue(+value);
        setValue(calcLogic.calculations());
        calcLogic.setFirstValue(+calcLogic.calculations())
        calcLogic.setSecondValue(null);
    } else {
        calcLogic.setFirstValue(+value);
    }
    calcLogic.setSign(sign);
    overwriting.setValue(true);
}

const clearOutput = (setValue: React.ComponentState): void => {
    setValue('0');
    calcLogic.reset();
}

const switchSign = (value: string, setValue: React.ComponentState): void => {
    if (value !== '0') {
        if (value[0] !== '-') {
            setValue("-" + value);
        } else{
            setValue(value.slice(1));
        }
    }
}

const takePercent = (value: string, setValue: React.ComponentState): void => {
    if(calcLogic.getSign() !== null) {
        setValue(calcLogic.calculations())
        calcLogic.reset();
    }
    calcLogic.setFirstValue(+value);
    calcLogic.setSign('%');
    setValue(calcLogic.calculations());
    calcLogic.reset();
}

const setDot = (value: string, setValue: React.ComponentState):void => {
    if(!value.includes(".")) {
        setValue(value + ".")
    }
}

const outputCalculation = (value: string, setValue: React.ComponentState): void => {
    if(calcLogic.getSign() !== null && !overwriting.getValue()) {
        calcLogic.setSecondValue(+value);
        setValue(calcLogic.calculations());
        calcLogic.reset();
        overwriting.setValue(true);
    }
}

export {calcLogic, overwriting, inputNum, inputSign, clearOutput, switchSign, takePercent, setDot, outputCalculation}
