function ProgressRing(props) {
    const {radius, stroke, progress} = props;

    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset = circumference - progress / 100 * circumference;
    const strokeDashoffsets = circumference - 0 / 100 * circumference;

    return (
        <svg className="transform -rotate-90"
             height={radius * 2}
             width={radius * 2}>
            <circle
                stroke="rgba(191, 219, 254, var(--tw-bg-opacity))"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{strokeDashoffsets}}
                r={normalizedRadius}
                cx={radius}
                cy={radius}/>
            <circle
                stroke="rgba(59, 130, 246, var(--tw-bg-opacity))"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{strokeDashoffset}}
                r={normalizedRadius}
                cx={radius}
                cy={radius}/>
        </svg>
    );
}

export default ProgressRing;