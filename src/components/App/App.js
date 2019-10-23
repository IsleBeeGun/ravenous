import React from 'react';
import './App.css';
import SpotList from '../SpotList/SpotList';
import SearchBar from '../SearchBar/SearchBar';

let spot = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  category: 'restaurant',
  pricing: 3,
  rating: 4.5,
  reviewCount: 90
};

const spots = [spot, spot, spot, spot, spot, spot];

class App extends React.Component {
  searchGoogle(keyword, type, sortBy) {
     console.log(`You are searching for ${keyword}, ${type} and ${sortBy}`);
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchGoogle={this.searchGoogle} />
        <SpotList spots={spots}/>
      </div>
    );
  }
}
export default App;
