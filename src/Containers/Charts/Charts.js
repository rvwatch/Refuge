import React from 'react';
import { connect } from 'react-redux';
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryAxis,
  VictoryBar
} from 'victory';

const chartData = dataStream => {
  return dataStream.map(point => {
    const time = point.time.split(':');
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
      y: point.value
    };

    return newTime;
  });
};

export const Charts = props => ({
  render() {
    const heartLine = chartData(props.heartRate);
    const stepLine = chartData(props.stepsTaken);
    const restingLine = chartData(props.heartRate.map(beat => ({time: beat.time, value: parseInt(props.restingHeart)})));

    
    return (
      <section className="chart-wrap">
        <h2>heart rate:</h2>
        <VictoryChart
          containerComponent={
            <VictoryZoomContainer zoomDomain={{ x: [5, 35], y: [0, 200] }} />
          }
        >
          {/* <VictoryAxis
            orientation='left'
            domain={[0, 220]}
            standalone={false}
          /> */}
          


          <VictoryLine
            interpolation="monotoneX"
            data={heartLine}
            style={{ data: { stroke: '#83B8F4' } }}
          />
           <VictoryLine
            interpolation="monotoneX"
            data={restingLine}
            style={{ data: { stroke: 'green' } }}
          />
          <VictoryBar style={{ data: { fill: '#c43a31' } }} data={stepLine} />

          
          <VictoryAxis
            tickFormat={(t) => {
              const num = t.split(':');
              if (num[1] === "00"){
                return num[0];
              } else { return ''; }
            }
          }
          />
          
          <VictoryAxis
            dependentAxis
            orientation='left'
            domain={[0, 220]}
          />
          <VictoryAxis
            dependentAxis
            orientation='right'
          />
          

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
  stepsTaken: state.stepsTaken,
  restingHeart: state.restingHeart
});

export default connect(mapStateToProps, null)(Charts);
