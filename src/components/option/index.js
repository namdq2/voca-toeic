function Option(props) {
    const { content } = props;
    return (
        <div className="mt-3 rounded-3xl border-gray-300 border p-2 flex justify-center items-center hover:border-green-500 hover:bg-green-500 hover:text-white font-bold">{content}</div>
    );
}

export default Option;
