import ProgressRing from '../progress-ring';

function PartItem(props) {
    const {color, name, description, progress} = props;
    return (
        <div className={color + " rounded-2xl p-4 flex flex-row items-center mt-3"}>
            <div className="flex-grow">
                <div className="font-bold">{name}</div>
                <div>{description}</div>
            </div>
            <div>
                <ProgressRing
                    radius={30}
                    stroke={4}
                    progress={progress}
                />
            </div>
        </div>
    );
}

export default PartItem;
