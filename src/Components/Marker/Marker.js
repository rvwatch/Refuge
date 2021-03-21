import React, {Component} from 'react';
import './Marker.css';
import { number } from 'prop-types';


export class Marker extends Component {
  constructor(){
    super();
    this.state = {
      showForm: true,
      markerText: ''
    };
  }
  
  closeForm = (event) => {
    event.preventDefault();
    this.setState({showForm: false});
  }

  handleMarker = (event) => {
    const { value} = event.target;
    
    this.setState({
      name: [value]
    });
  }

  render() {
    const {xPos, yPos} = this.props;

    const showForm = this.state.showForm ? 'block' : 'none';

    let styles = {markPos: {
      top: yPos,
      left: xPos
    },
    formStyles: {
      display: {showForm}
    }
    };

    return (
      <div className='marker' style={styles.markPos}>+
        <form style={styles.formStyles}>
          <input name='markerText'  type='text' />
          
        </form>
      </div>
    );
  }
};

Marker.propTypes = {
  xPos: number,
  yPos: number
};