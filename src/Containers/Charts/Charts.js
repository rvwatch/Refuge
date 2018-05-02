import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, array } from 'prop-types';
import { Marker } from '../../Components/Marker/Marker';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryBar,
  VictoryLabel
} from 'victory';
import './Charts.css';

export class Charts extends Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }

  render() {
    const { heartRate, stepsTaken, restingHeart } = this.props;
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
          // eslint-disable-next-line
          x: timeValue,
          // eslint-disable-next-line
          y: point.value
        };

        return newTime;
      });
    };

    const renderMarkers = this.state.markers.map(mark => {
      return <Marker key={mark.yPos} {...mark} />;
    });

    const showCoords = event => {
      const container = document.querySelector('.chart-wrap');
      const xPos = event.clientX - container.offsetLeft - 10 + container.scrollLeft;
      const yPos = event.clientY - 125;
      const markers = [...this.state.markers, {xPos, yPos}];
      this.setState({ markers });
    };

    const heartLine = chartData(heartRate);
    const stepLine = chartData(stepsTaken);
    const restingLine = chartData(
      heartRate.map(beat => ({
        time: beat.time,
        value: parseInt(restingHeart, 10)
      }))
    );

    return (
      <div className="key-container">
        <h2 className="chart-key">
          daily activity:
          <span className="resting">resting bpm--</span>
          <span className="current">latest bpm--</span>
          <span className="steps">steps taken--</span>
        </h2>

        <section className="chart-wrap" onClick={showCoords}>
          {renderMarkers}
          <VictoryChart height={375} width={2000}>
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
            <VictoryBar
              barRatio={2}
              style={{ data: { fill: '#ffcf32' } }}
              data={stepLine}
            />

            <VictoryAxis
              // eslint-disable-next-line
              tickFormat={t => {
                const num = t.split(':');
                if (num[1] === '00') {
                  return num[0];
                } else {
                  return '';
                }
              }}
            />

            <VictoryAxis dependentAxis orientation="left" domain={[0, 220]} />
            <VictoryAxis dependentAxis orientation="right" />
          </VictoryChart>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  heartRate: state.heartRate,
  stepsTaken: state.stepsTaken,
  restingHeart: state.restingHeart
});

Charts.propTypes = {
  heartRate: array,
  stepsTaken: array,
  restingHeart: string
};

export default connect(mapStateToProps, null)(Charts);
