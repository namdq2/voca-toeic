import { Link } from 'react-router-dom';
import Header from '../../components/header';
import PartItem from '../../components/part-item';
import QuestionContainer from '../../components/question-container';
import logo from '../../images/logo.svg';

function Home() {
  return (
    <div className="flex justify-center max-w">
      <div className="container ">
        <QuestionContainer>
          <Header title="Vocabulary" logo={logo} />
          <Link to="/practicing">
            <PartItem color="bg-blue-300" name="Part 1" description="50 words" progress="60" />
          </Link>
        </QuestionContainer>
      </div>
    </div>
  );
}

export default Home;
