function QuestionContainer(props) {
    const {children} = props;
    return (
        <div className="bg-white rounded-3xl p-8">
            {children}
        </div>
    );
}

export default QuestionContainer;
