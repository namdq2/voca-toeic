import HeaderBack from '../../components/header/header-back';
import QuestionContainer from '../../components/question-container';
import Option from '../../components/option';
import Word from '../../components/word';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

let currentQuestionIndex = 0;

function Test() {
    const { partId, testId } = useParams();
    const parts = useSelector((state) => state.test.data);
    const part = parts.find(part => part.id == partId);
    const test = part.tests.find(test => test.id == testId);

    const [question, setQuestion] = useState(test.questions[0]);
    const [result, setResult] = useState(undefined);
    const [isFinishTest, setIsFinishTest] = useState(false);
    const [pass, setPass] = useState(0);

    const nextQuestionClick = () => {
        setResult(undefined);

        if (currentQuestionIndex < test.questions.length - 1) {
            currentQuestionIndex = currentQuestionIndex + 1;
            console.log(currentQuestionIndex);
            setQuestion(test.questions[currentQuestionIndex]);
        } else {
            setIsFinishTest(true);
        }
    }

    const answerClick = (id) => {
        let result = id === question.correctAnswerId;
        console.log(result)
        if (result) {
            setResult("true");
            setPass(pass + 1);
        } else {
            setResult("false");
        }
    }

    const answerView = (answers) => answers.map((answer) =>
        // <Option content={answer.content} key={answer.id}></Option>
        <button onClick={() => answerClick(answer.id)} key={answer.id} disabled={result !== undefined}>{answer.content}</button>
    )

    return (
        <div className="flex justify-center max-w">
            <div className="container">
                <HeaderBack title={test.name} pass={pass} total={test.questions.length}></HeaderBack>
                <div className="p-2">
                    {result}
                    <QuestionContainer key={question.id}>
                        <div className="font-bold italic">{question.question}</div>
                        <Word content={question.word}></Word>
                        <div>
                            {answerView(question.answers)}
                        </div>
                        {
                            !isFinishTest ?
                                result ? (
                                    <div>
                                        <button onClick={() => nextQuestionClick()}>Next</button>
                                    </div>
                                ) : null
                                : "Finish"
                        }
                    </QuestionContainer>
                </div>
            </div>
        </div>
    );
}



export default Test;
