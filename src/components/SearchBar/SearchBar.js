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
            keyword: '',
            type: '',
            sortBy: 'nearest'
        };
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event) {
        this.props.searchGoogle(this.state.keyword, this.state.type, this.state.sortBy);
        event.preventDefault();
    }
    handleKeywordChange(event) {
        this.setState({ keyword: event.target.value });
    }
    handleTypeChange(event) {
        this.setState({ type: event.target.value});
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
                    <input placeholder="Search Businesses" onChange={this.handleKeywordChange} />
                    <input placeholder="Where?" onChange={this.handleTypeChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;