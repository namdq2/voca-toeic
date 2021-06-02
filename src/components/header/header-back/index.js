import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function HeaderBack(props) {
  const { title } = props;
  return (
    <div className="flex p-5 h-16 items-center">
      <div className="flex-1">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      </div>
      <div className="font-bold">
        {title}
      </div>
      <div className="flex-1">
      </div>
    </div>
  );
}

export default HeaderBack;
