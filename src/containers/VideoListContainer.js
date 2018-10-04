import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = connect(mapStateToProps)(VideoPlayer);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = (state) => {
  return {
    videos: state.videoList,
  };
};

export default VideoListContainer;
