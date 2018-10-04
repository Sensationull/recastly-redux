import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

const initialState = {
  videoList: [],
  video: null,
};

const defaultReducer = (state = initialState) => {
  state.videoList = state.videoList || initialState.videoList;
  state.video = state.video || initialState.video;
  return state;
}
 
const rootReducer = combineReducers({ 
  currentVideo: currentVideoReducer, 
  videoList: videoListReducer, 
  default: defaultReducer, 
});

export default rootReducer;
