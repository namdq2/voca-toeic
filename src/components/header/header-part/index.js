import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';

function HeaderPart(props) {
  const { title } = props;
  const history = useHistory();

  const back = () => {
    history.goBack();
  }

  return (
    <div className="flex p-5 h-16 items-center">
      <div className="flex-1">
        <button onClick={() => back()}><FontAwesomeIcon icon={faArrowLeft} /></button>
      </div>
      <div className="flex-1 font-bold flex justify-center">
        {title}
      </div>
      <div className="flex-1 font-bold text-green-500">

      </div>
    </div>
  );
}

export default HeaderPart;
