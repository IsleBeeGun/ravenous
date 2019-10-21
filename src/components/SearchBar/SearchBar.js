import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    'Highest Rated': 'rates',
    'Nearest to me': 'nearest',
    'Most Reviewed': 'reviews'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'nearest'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event) {
        this.props.searchGoogle(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }
    handleLocationChange(event) {
        this.setState({ location: event.target.value});
    }
    getSortByClass(sortByOption) {
         if (sortByOption === this.state.sortBy) {
             return 'active';
         }
         return '';
    }
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }
    renderSortByOptions() {
      return Object.keys(sortByOptions).map(sortByOption => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
      }) 
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;