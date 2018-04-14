import React from 'react';
import { connect } from 'react-redux';
import { VictoryChart, VictoryLine, VictoryScatter, VictoryZoomContainer } from 'victory';

// const heartRate = [
//   { time: '15:54:19', value: 75 },
//   { time: '15:54:34', value: 75 },
//   { time: '15:54:39', value: 74 },
//   { time: '15:54:44', value: 73 },
//   { time: '15:54:54', value: 74 },
//   { time: '15:55:09', value: 74 },
//   { time: '15:55:14', value: 76 },
//   { time: '15:55:29', value: 76 },
//   { time: '15:55:44', value: 76 },
//   { time: '15:55:49', value: 77 },
//   { time: '15:55:54', value: 78 }
// ];


const chartHeartRate = (heartRate) => {
  
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



export const Charts = (props) => ({
  
  render() {
    
    
   const heartLine =  chartHeartRate(props.heartRate);
    
    return (
      <section>
        <VictoryChart
        domain={{y: [0, 200]}}
        containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 200]}}/>}
      >
          <VictoryLine
            interpolation="monotoneX"
            data={heartLine}
            style={{ data: { stroke: '#83B8F4' } }}
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
  stepsTaken: state.stepsTaken
});

export default connect(mapStateToProps, null)(Charts);
