import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, videos: state.videoList});

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    ...ownProps,
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
  }
);

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
