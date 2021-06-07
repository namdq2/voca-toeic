import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import {selectTestById, updateProgress} from '../../store/test/testSlice';
import HeaderTest from '../../components/header/header-test';
import QuestionContainer from '../../components/question-container';
import Option from '../../components/option';
import Word from '../../components/word';
import Button from '../../components/button';

function Test() {
    const history = useHistory();
    const dispatch = useDispatch();

    const {partId, testId} = useParams();
    const test = useSelector((state) => selectTestById(state, partId, testId));

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [question, setQuestion] = useState(test.questions[currentQuestionIndex]);
    const [result, setResult] = useState(undefined);
    const [isFinishTest, setIsFinishTest] = useState(false);
    const [pass, setPass] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerId, setAnswerId] = useState(undefined);

    useEffect(() => {
        setQuestion(test.questions[currentQuestionIndex]);
    }, [currentQuestionIndex])

    const back = () => {
        let progress = pass / test.questions.length * 100
        dispatch(updateProgress({partId, testId, progress}));
        history.goBack();
    }

    const nextQuestionClick = () => {
        setResult(undefined);
        setAnswerId(undefined);
        if (currentQuestionIndex < test.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const answerClick = (id) => {
        setAnswerId(id);
        let result = id === question.correctAnswerId;
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

    const answerView = (answers) => answers.map((answer) => {
        let answerResult = undefined;
        if (answerId !== undefined) {
            if (answer.id === answerId) {
                answerResult = false;
            }
            if (answer.id === question.correctAnswerId) {
                answerResult = true;
            }
        }

        return (
            <Option answer={answer} key={answer.id} disabled={result !== undefined} onClick={answerClick}
                    result={answerResult}/>
        )
    })

    return (
        <div className="flex justify-center max-w">
            <div className="container">
                <HeaderTest title={test.name} current={currentQuestion} pass={pass}
                            total={test.questions.length}/>
                <div className="p-2">
                    <QuestionContainer key={question.id}>
                        <div className="font-bold italic">{question.question}</div>
                        <Word content={question.word}/>
                        <div className="flex-row">
                            {answerView(question.answers)}
                        </div>
                        <div className="mt-8">
                            {
                                (result !== undefined) ?
                                    result ?
                                        <div className="w-full p-6 rounded-xl border-2 p-2 flex justify-center items-center 
                                    font-bold  text-green-600">Correct!</div>
                                        :
                                        <div className="w-full p-6 rounded-xl border-2 p-2 flex justify-center items-center 
                                    font-bold  text-red-600">Sad :(</div>
                                    : null
                            }
                        </div>
                        <div className="mt-4">
                            {
                                isFinishTest ?
                                    <Button onClick={() => back()}
                                            content="Finish"
                                            textColor="text-blue-800"
                                            bgColor="bg-blue-500"
                                            borderColor="border-blue-500">
                                    </Button>
                                    :
                                    <Button onClick={nextQuestionClick}
                                            content="Next"
                                            textColor="text-blue-800"
                                            bgColor="bg-blue-400"
                                            borderColor="border-blue-400"
                                            disabled={result === undefined}>
                                    </Button>
                            }
                        </div>
                    </QuestionContainer>
                </div>
            </div>
        </div>
    );
}

export default Test;
