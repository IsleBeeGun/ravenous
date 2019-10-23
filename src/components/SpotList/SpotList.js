import React from 'react';
import './SpotList.css';
import Spot from '../Spot/Spot';

class SpotList extends React.Component {
  render() {
    return (
      <div className="SpotList">
        {
          this.props.spots.map( (spot) => {
            return <Spot spot={spot} />;
          })
        }
      </div>
    )
  }
}
export default SpotList;