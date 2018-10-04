import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    ...ownProps,
    handleVideoSearch: (q) => dispatch(handleSearchChange(q)),
  }
);

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
