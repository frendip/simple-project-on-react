import React, {FC} from 'react';
import classes from "../styles/Quiz/Quiz.module.scss";
import {IQuestion} from "./types/types";

interface QuizQuestionsProps {
    questions: IQuestion[];
    progress: number,
    setProgress: React.ComponentState,
    correct: number,
    setCorrect: React.ComponentState,
}

const QuizQuestions: FC<QuizQuestionsProps> = ({questions, progress, setProgress, correct, setCorrect}) => {
    const onClickVariant = (index: number):void => {
        setProgress(progress + 1)
        if (index === questions[progress].correctAnswer) {
            setCorrect(correct + 1);
        }
    }
    const percentage = Math.round((progress) / (questions.length) * 100);


    return (
        <div className={classes.quiz}>
            <div className={classes.quiz__progress}>{progress} / {questions.length}</div>
            <div className={classes.quiz__progressLine}>
                <div style={{width: `${percentage}%`}} className={classes.quiz__progressLineInner}></div>
            </div>
            <h1 className={classes.quiz__question}>{questions[progress].title}</h1>
            <ul className={classes.quiz__answers}>
                {
                    questions[progress].variants.map((question,index) =>
                        <li key={index} onClick={() => onClickVariant(index)}>{question}</li>)
                }
            </ul>
        </div>
    )
}

export default QuizQuestions;