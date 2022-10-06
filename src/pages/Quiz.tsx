import React, {useState} from 'react';
import classes from "../styles/Quiz/Quiz.module.scss"
import questionJSON from "../JSONFiles/questionJSON.json"
import QuizQuestions from "../components/QuizQuestions";
import QuizResult from "../components/QuizResult";

const Quiz = () => {
    const [progress, setProgress] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);

    const restartQuiz = (): void => {
        setProgress(0);
        setCorrect(0);
    }

    const questions = questionJSON;

    return (
        <div className={classes.main}>
            {questions.length !== progress ?
                <QuizQuestions questions={questions} progress={progress} setProgress={setProgress} correct={correct} setCorrect={setCorrect}/>
                :
                <QuizResult questions={questions} correct={correct} restartQuiz={restartQuiz}/>
            }
        </div>
    );
};

export default Quiz;