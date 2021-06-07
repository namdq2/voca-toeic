import {Link} from 'react-router-dom';
import Header from '../../components/header';
import PartItem from '../../components/part-item';
import QuestionContainer from '../../components/question-container';
import {useSelector} from 'react-redux';

function Home() {
    const parts = useSelector((state) => state.test.data);

    const partList = parts.map((part) =>
        <Link to={"/parts/" + part.id} key={part.id}>
            <PartItem color="bg-blue-300" name={part.name} description={part.description} progress={part.progress}/>
        </Link>
    );

    return (
        <div className="flex justify-center max-w">
            <div className="container ">
                <QuestionContainer>
                    <Header title="Vocabulary"/>
                    {partList}
                </QuestionContainer>
            </div>
        </div>
    );
}

export default Home;
