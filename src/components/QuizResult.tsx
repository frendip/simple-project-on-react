import React, {FC} from 'react';
import classes from "../styles/Quiz/Quiz.module.scss";
import {IQuestion} from "./types/types";

interface QuizResultProps {
    questions: IQuestion[];
    correct: number,
    restartQuiz: () => void;
}

const QuizResult: FC<QuizResultProps> = ({questions, correct, restartQuiz}) => {

    return (
        <div className={classes.quiz__result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"  alt={"#"}/>
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <button onClick={restartQuiz}>Попробовать снова</button>
        </div>
    )
}

export default QuizResult;