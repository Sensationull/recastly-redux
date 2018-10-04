import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

const handleVideoSearch = (q) => {
  const options = {
    key: this.props.API_KEY,
    query: q,
  }

  return (dispatch) => {
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;
