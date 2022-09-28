import React, {FC, HTMLAttributes} from 'react';

interface CalcButtonProps extends HTMLAttributes<HTMLButtonElement>{
    color: "black" | "white";
}

const CalcButton: FC<CalcButtonProps> = ({children, color, ...props}) => {
    return (
        <button style={{color: color}} {...props}>{children}</button>
    );
};

export default CalcButton;