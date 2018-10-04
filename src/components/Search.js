import React from 'react';
 
class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange(e) {
    this.props.handleVideoSearch(e.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
