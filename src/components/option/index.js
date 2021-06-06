import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Option(props) {
    const { answer, disabled, onClick, colorCorrect, colorIncorrect, result } = props;

    const colorTrue = "border-" + colorCorrect + "-500  bg-" + colorCorrect + "-500 " + "text-white";
    const colorFalse = "border-" + colorIncorrect + "-500  bg-" + colorIncorrect + "-500 " + "text-white";

    const hoverCSS = disabled ?
        result === undefined ? "" : result ? colorTrue : colorFalse
        : "hover:border-green-500 hover:bg-green-500 hover:text-white";


    const emptyElement = () => <div className="p-4"></div>;

    return (
        <button className={"w-full mt-3 rounded-3xl border-gray-300 border-2 p-2 flex justify-between items-center font-bold " + hoverCSS}
            onClick={() => onClick(answer.id)} key={answer.id} disabled={disabled}>
            <div className="pl-2 pr-2 text-white">
                {result === undefined ? null : result ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />}
            </div>

            {answer.content}
            <div className="pl-2 pr-2"></div>
        </button>
    );
}

export default Option;
