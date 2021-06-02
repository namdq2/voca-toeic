import { Link } from "react-router-dom";

function Header(props) {
    const { title, logo } = props;
    return (
        <div className="flex flex-row items-center pl-5 pr-5">
            <div className="flex-grow">
                <Link to="/"><h1 className="font-bold">{title}</h1></Link>
            </div>
            <div>
                <Link to="/"><img className="w-16 h-16" alt={title} src={logo} /></Link>
            </div>
        </div>
    );
}

export default Header;
