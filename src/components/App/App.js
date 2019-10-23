import React from 'react';
import './App.css';
import SpotList from '../SpotList/SpotList';
import SearchBar from '../SearchBar/SearchBar';
import Google from '../../util/Google';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    }
    this.searchGoogle = this.searchGoogle.bind(this);
  }
  searchGoogle(keyword, type, sortBy) {
     Google.searchGoogle(keyword, type, sortBy).then(spots => {
       this.setState( {spots: spots} )
     });
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchGoogle={this.searchGoogle} />
        <SpotList spots={this.state.spots}/>
      </div>
    );
  }
}
export default App;
