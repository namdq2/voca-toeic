import { Link } from "react-router-dom";
import defaultLogo from '../../images/logo.svg';

function Header(props) {
    const { title, logo } = props;
    const realLogo = logo ? logo : defaultLogo;

    return (
        <div className="flex flex-row items-center pl-5 pr-5">
            <div className="flex-grow">
                <Link to="/"><h1 className="font-bold">{title}</h1></Link>
            </div>
            <div>
                <Link to="/"><img className="w-16 h-16" alt={title} src={realLogo} /></Link>
            </div>
        </div>
    );
}

export default Header;
