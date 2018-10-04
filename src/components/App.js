import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import handleSearchChange from '../actions/search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.handleVideoSearch();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    ...ownProps,
    handleVideoSearch: () => dispatch(handleSearchChange('food recipes')),
  }
);

const AppContainer = connect(null, mapDispatchToProps)(App);
export default AppContainer;
