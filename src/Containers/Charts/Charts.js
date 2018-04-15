import React from 'react';
import { connect } from 'react-redux';
import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryZoomContainer,
  VictoryAxis,
  VictoryBar
} from 'victory';

const rawSteps = [
  { time: '08:17:00', value: 21 },
  { time: '08:18:00', value: 15 },
  { time: '08:19:00', value: 23 },
  { time: '08:20:00', value: 56 },
  { time: '08:21:00', value: 3 },
  { time: '08:22:00', value: 28 },
  { time: '08:23:00', value: 12 },
  { time: '08:24:00', value: 0 },
  { time: '08:25:00', value: 21 },
  { time: '08:26:00', value: 5 },
  { time: '08:27:00', value: 0 },
  { time: '08:28:00', value: 0 },
  { time: '08:29:00', value: 13 },
  { time: '08:30:00', value: 0 },
  { time: '08:31:00', value: 0 },
  { time: '08:32:00', value: 8 }
];

const chartHeartRate = heartRate => {
  return heartRate.map(beat => {
    const time = beat.time.split(':');
    const hours = Number(time[0]);
    const minutes = Number(time[1]);
    const seconds = Number(time[2]);
    let timeValue;
    if (hours > 0 && hours <= 12) {
      timeValue = '' + hours;
    } else if (hours > 12) {
      timeValue = '' + (hours - 12);
    } else if (hours === 0) {
      timeValue = '12';
    }

    timeValue += minutes < 10 ? ':0' + minutes : ':' + minutes; // get minutes
    timeValue += seconds < 10 ? ':0' + seconds : ':' + seconds; // get seconds
    timeValue += hours >= 12 ? ' P.M.' : ' A.M.'; // get AM/PM
    const newTime = {
      x: timeValue,
      y: beat.value
    };
    return newTime;
  });
};

export const Charts = props => ({
  render() {
    const heartLine = chartHeartRate(props.heartRate);

    return (
      <section>
        <VictoryChart
          domain={{ y: [0, 200] }}
          scale="time"
          // containerComponent={
          //   <VictoryZoomContainer zoomDomain={{ x: [5, 35], y: [0, 200] }} />
          // }
        >
          <VictoryAxis dependentAxis />
          <VictoryAxis label="Time" scale="time" />
          <VictoryLine
            interpolation="monotoneX"
            data={heartLine}
            style={{ data: { stroke: '#83B8F4' } }}
          />
          {/* <VictoryBar
          style={{ data: { fill: "#c43a31" } }}
          data={stepsData}
        /> */}
          {/* <VictoryScatter
            data={data}
            size={4}
            style={{ data: { fill: '#29C94F' } }}
          /> */}
        </VictoryChart>
      </section>
    );
  }
});

const mapStateToProps = state => ({
  heartRate: state.heartRate,
  stepsTaken: state.stepsTaken
});

export default connect(mapStateToProps, null)(Charts);
