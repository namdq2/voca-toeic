import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function HeaderTest(props) {
  const { title, current, pass, total } = props;

  const progress = current / total * 100;

  return (
    <div>
      <div className="flex p-5 h-16 items-center">
        <div className="flex-1">
          {/* <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link> */}
        </div>
        <div className="flex-1 font-bold flex justify-center">
          {title}
        </div>
        <div className="flex-1 font-bold text-green-500 flex flex-row-reverse">
          Correct: {pass} / {total}
        </div>
      </div>
      <div className="relative pt-1 pl-10 pr-10">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div style={{ width: progress + "%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTest;
