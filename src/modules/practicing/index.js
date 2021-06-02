import HeaderBack from '../../components/header/header-back';
import QuestionContainer from '../../components/question-container';
import Option from '../../components/option';
import Word from '../../components/word';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function Practicing() {
    const parts = useSelector((state) => state.vocabulary.data);
    const { id } = useParams();
    const part = parts.find(x => x.id == id);

    return (
        <div className="flex justify-center max-w">
            <div className="container">
                <HeaderBack title={part.name}></HeaderBack>
                <div className="p-2">
                    <QuestionContainer>
                        <div className="font-bold italic">What is this word mean?</div>
                        <Word content="pointing"></Word>
                        <div>
                            <Option content="chỉ trỏ"></Option>
                            <Option content="sắp xếp"></Option>
                            <Option content="tựa vào"></Option>
                        </div>
                    </QuestionContainer>
                </div>
            </div>
        </div>
    );
}

export default Practicing;
