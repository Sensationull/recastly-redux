import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

const mapStateToProps = (state) => {
  return {
    video: state.video,
  };
};

export default VideoPlayerContainer;
