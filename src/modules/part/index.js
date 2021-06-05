import HeaderBack from '../../components/header/header-back';
import QuestionContainer from '../../components/question-container';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PartItem from '../../components/part-item';

function Part() {
    const parts = useSelector((state) => state.test.data);
    const { id } = useParams();
    const part = parts.find(x => x.id == id);

    const testView = part.tests.map((test) =>
        <Link to={"/tests/" + id + "/" + test.id} key={test.id}>
            <PartItem color="bg-blue-300" name={test.name} description={test.description} progress={test.progress} />
        </Link>
    );

    return (
        <div className="flex justify-center max-w">
            <div className="container">
                <HeaderBack title={part.name}></HeaderBack>
                <div className="p-2">
                    <QuestionContainer>
                        Tests
                        {testView}
                    </QuestionContainer>
                </div>
            </div>
        </div>
    );
}
export default Part;
