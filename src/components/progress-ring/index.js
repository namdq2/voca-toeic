import React from 'react';

class ProgressRing extends React.Component {
    constructor(props) {
        super(props);

        const {radius, stroke} = this.props;

        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    render() {
        const {radius, stroke, progress} = this.props;

        const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
        const strokeDashoffsets = this.circumference - 0 / 100 * this.circumference;
        return (
            <svg className="transform -rotate-90"
                 height={radius * 2}
                 width={radius * 2}
            >
                <circle
                    stroke="rgba(191, 219, 254, var(--tw-bg-opacity))"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={this.circumference + ' ' + this.circumference}
                    style={{strokeDashoffsets}}
                    r={this.normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="rgba(59, 130, 246, var(--tw-bg-opacity))"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={this.circumference + ' ' + this.circumference}
                    style={{strokeDashoffset}}
                    r={this.normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
        );
    }
}

export default ProgressRing;

//   class Example extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         progress: 0
//       };
//     }

//     componentDidMount() {
//       // emulating progress
//       const interval = setInterval(() => {
//         this.setState({ progress: this.state.progress + 10 });
//         if (this.state.progress === 100)
//           clearInterval(interval);
//       }, 1000);
//     }

//     render() {
//       return (
//         <ProgressRing
//           radius={ 60 }
//           stroke={ 4 }
//           progress={ this.state.progress }
//         />
//       );
//     }
//   }
