import { Link } from 'react-router-dom';
import Header from '../../components/header';
import PartItem from '../../components/part-item';
import QuestionContainer from '../../components/question-container';
import logo from '../../images/logo.svg';
import { increment } from '../../store/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center max-w">
      <div className="container ">
        <QuestionContainer>
          <Header title="Vocabulary" logo={logo} />
          <Link to="/practicing">
            <PartItem color="bg-blue-300" name="Part 1" description="50 words" progress="60" />
          </Link>
          {count}
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
            </button>
        </QuestionContainer>
      </div>
    </div>
  );
}

export default Home;
