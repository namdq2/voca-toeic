function Word(props) {
    const {content} = props;
    return (
        <div className="flex justify-center items-center text-xl mt-8 mb-10 text-blue-500 font-bold">{content}</div>
    );
}

export default Word;
