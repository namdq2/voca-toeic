function Header(props) {
    const {title, logo} = props;
    return (
        <div className="flex flex-row items-center pl-5 pr-5">
            <div className="flex-grow">
                <h1 className="font-bold">{title}</h1>
            </div>
            <div>
                <img className="w-16 h-16" alt={title} src={logo} />
            </div>
        </div>
    );
}

export default Header;
