function Option(props) {
    const { answer, disabled, onClick } = props;
    const hoverCSS = disabled ? " " : "hover:border-green-500 hover:bg-green-500 hover:text-white"
    return (
        <button className={"w-full mt-3 rounded-3xl border-gray-300 border-2 p-2 flex justify-center items-center font-bold " + hoverCSS}
            onClick={() => onClick(answer.id)} key={answer.id} disabled={disabled}>{answer.content}</button>
    );
}

export default Option;
