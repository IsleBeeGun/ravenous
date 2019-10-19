import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    'Nearest': "xxxxxx",
    'Highest Rated': 'xxxxxxx',
    'Most Reviewed': 'xxxxxx'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
      return  Object.keys(sortByOptions).map(sortByOption => {
          let sortByOptionValue = sortByOptions[sortByOption];
          <li key={sortByOptionValue}></li>
      });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    renderSortByOptions();
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;