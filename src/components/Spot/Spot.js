import React from 'react';
import './Spot.css';

function nameMyType(type) {
  switch (type) {
    case 'bakery': return 'Пекарня';
    case 'bar': return 'Бар';
    case 'cafe': return 'Кафе';
    case 'meal_delivery': return 'Доставка еды';
    case 'restaurant': return 'Ресторан';
    default: return 'Нечто иное';
  }
}

function rusEndingMale(value) {
  let str = String(value);
  let end;
  if (str.length < 2) {
    end = str;
  } else {
    end = str[str.length - 2] + str[str.length - 1];
  }
  if (parseInt(end) > 19) {
    end = end[end.length - 1];
    switch (end) {
      case '0': return 'ов';
      case '1': return '';
      case '2':
      case '3':
      case '4': return 'а';
      default: return 'ов';
    }
  } else {
    switch (end) {
      case '0': return 'ов';
      case '1': return '';
      case '2':
      case '3':
      case '4': return 'а';
      default: return 'ов';
  }
}
  // switch(end) {
  //   case '0': return 'ов'; 
  //   case '1': return '-'; 
  //   case '2':
  //   case '3':
  //   case '4': return 'а';
  //   default: return 'ов';
  // }
}

class Spot extends React.Component {
  render() {
    return (
      <div className="Spot">
        <div className="image-container">
          <img src={this.props.spot.imageSrc} alt='' />
        </div>
        <h2>{this.props.spot.name}</h2>
        <div className="Spot-address">
          <p>{this.props.spot.address}</p>
        </div>
        <div className="Spot-information">
          <div className="Spot-reviews">
            <h3>{nameMyType(this.props.spot.category)}</h3>
            <h3 className="rating">{`${this.props.spot.rating} Stars `}</h3>
            <p>{`${this.props.spot.reviewCount} отзыв${rusEndingMale(this.props.spot.reviewCount)}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Spot;