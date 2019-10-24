import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Выше рейтинг': 'rating',
  'Ближе ко мне': 'nearest',
  'Больше отзывов': 'reviews'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      type: 'restaurant',
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
    this.setState({ type: event.target.value });
    this.handleSearch(event);
  }
  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    }
    return '';
  }
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
    this.handleSearch();
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
          <input placeholder="Я ищу ..." onChange={this.handleKeywordChange} />
          <select placeholder="Ресторан" onChange={this.handleTypeChange}>
            <option value="restaurant">Ресторан</option>
            <option value="cafe">Кафе</option>
            <option value="bar">Бар</option>
            <option value="meal_delivery">Доставка еды</option>
            <option value="bakery">Пекарня</option>
          </select>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Показать места</button>
        </div>
      </div>
    )
  }
}
export default SearchBar;