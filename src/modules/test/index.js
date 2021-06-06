import HeaderTest from '../../components/header/header-test';
import QuestionContainer from '../../components/question-container';
import Option from '../../components/option';
import Word from '../../components/word';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Button from '../../components/button';

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
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestionClick = () => {
        setResult(undefined);
        if (currentQuestionIndex < test.questions.length - 1) {
            currentQuestionIndex = currentQuestionIndex + 1;
            setQuestion(test.questions[currentQuestionIndex]);
        }
    }

    const answerClick = (id) => {
        let result = id === question.correctAnswerId;
        console.log(result)
        if (result) {
            setResult(true);
            setPass(pass + 1);
        } else {
            setResult(false);
        }
        if (currentQuestionIndex === test.questions.length - 1) {
            setIsFinishTest(true);
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const answerView = (answers) => answers.map((answer) =>
        <Option answer={answer} key={answer.id} disabled={result !== undefined} onClick={answerClick}></Option>
    )

    return (
        <div className="flex justify-center max-w">
            <div className="container">
                <HeaderTest title={test.name} current={currentQuestion} pass={pass} total={test.questions.length}></HeaderTest>
                <div className="p-2">
                    <QuestionContainer key={question.id}>
                        <div className="font-bold italic">{question.question}</div>
                        <Word content={question.word}></Word>
                        <div className="flex-row">
                            {answerView(question.answers)}
                        </div>
                        <div className="mt-8">
                            {
                                (result !== undefined) ?
                                    result ?
                                        <div className="w-full p-6 rounded-xl border-2 p-2 flex justify-center items-center 
                                    font-bold bg-green-300 border-green-300 text-green-800">Đúng rồi!</div>
                                        :
                                        <div className="w-full p-6 rounded-xl border-2 p-2 flex justify-center items-center 
                                    font-bold bg-red-300 border-red-300 text-red-800">Sai rồi :(</div>
                                    : null
                            }
                        </div>
                        <div className="mt-4">
                            {
                                isFinishTest ?
                                    <Button onClick={() => { }}
                                        content="Finish"
                                        textColor="text-red-800"
                                        bgColor="bg-red-500"
                                        borderColor="border-red-500"
                                        disabled={!result}>
                                    </Button>
                                    :
                                    <Button onClick={nextQuestionClick}
                                        content="Next"
                                        textColor="text-green-800"
                                        bgColor="bg-green-400"
                                        borderColor="border-green-400"
                                        disabled={result === undefined}>
                                    </Button>
                            }
                        </div>
                    </QuestionContainer>
                </div>
            </div>
        </div >
    );
}



export default Test;
