import React from 'react';
import './Spot.css';

function nameMyType(type) {
  switch(type) {
    case 'bakery': return 'Пекарня'; break;
    case 'bar': return 'Бар'; break;
    case 'cafe': return 'Кафе'; break;
    case 'meal_delivery': return 'Доставка еды'; break;
    case 'restaurant': return 'Ресторан'; break;
    default: return 'Что-то ещё'; break;
  }
}

class Spot extends React.Component {
  render() {
    return (
      <div className="Spot">
        <div className="image-container">
          <img src={this.props.spot.imageSrc} alt=''/>
        </div>
        <h2>{this.props.spot.name}</h2>
        <div className="Spot-address">
            <p>{this.props.spot.address}</p>
        </div>
        <div className="Spot-information">
          <div className="Spot-reviews">
            <h3>{nameMyType(this.props.spot.category)}</h3>
            <h3 className="rating">{`${this.props.spot.rating} -- `}</h3>
            <img src="./star.svg" />
            <p>{`${this.props.spot.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Spot;