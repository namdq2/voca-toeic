function Button(props) {
    const {content, disabled, onClick, bgColor, borderColor, textColor} = props;
    const colorCSS = disabled ? "bg-gray-300" : bgColor ? bgColor : "bg-gray-300";
    const borderColorCSS = disabled ? "border-gray-300" : borderColor ? borderColor : "border-gray-300";
    const textColorCSS = disabled ? "text-gray-600" : textColor ? textColor : "text-gray-600";
    return (
        <button
            className={"w-full mt-3 rounded-3xl border-2 p-2 flex justify-center items-center font-bold "
            + colorCSS + " "
            + borderColorCSS + " "
            + textColorCSS}
            onClick={() => onClick()} disabled={disabled}>{content}</button>
    );
}

export default Button;
