// action
export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'user/LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'user/LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'user/LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const LOAD_USER_REQUEST = 'user/LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'user/LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'user/LOAD_USER_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'user/LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'user/LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'user/LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'user/FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'user/FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'user/FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'user/UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'user/UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'user/UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'user/REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'user/REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'user/REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'user/ADD_POST_TO_ME';

export const loginAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

const dummyUser = {
  nickname: 'sujeongKim',
  Post: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  user: null,
  loginData: {},
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        loginData: action.data,
        user: dummyUser,
      };
    default:
      return state;
  }
};
