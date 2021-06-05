import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function HeaderBack(props) {
  const { title, pass, total } = props;

  return (
    <div className="flex p-5 h-16 items-center justify-between">
      <div className="">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      </div>
      <div className="font-bold">
        {title}
      </div>
      <div className="">
        {pass} / {total}
      </div>
    </div>
  );
}

export default HeaderBack;
