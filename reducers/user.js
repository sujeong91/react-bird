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

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});
export const loginSuccessAction = (data) => ({
  type: LOG_IN_SUCCESS,
  data,
});
export const loginFailureAction = (error) => ({
  type: LOG_IN_FAILURE,
  error,
});
export const logoutRequestAction = (data) => ({
  type: LOG_OUT_REQUEST,
  data,
});
export const logoutSuccessAction = (data) => ({
  type: LOG_OUT_SUCCESS,
  data,
});
export const logoutFailureAction = (error) => ({
  type: LOG_OUT_FAILURE,
  error,
});
export const loadUserRequestAction = () => ({
  type: LOAD_USER_REQUEST,
});
export const loadUserSuccessAction = (data) => ({
  type: LOAD_USER_SUCCESS,
  data,
});
export const loadUserFailureAction = (error) => ({
  type: LOAD_USER_FAILURE,
  error,
});
export const signUpRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});
export const signUpSuccessAction = () => ({
  type: SIGN_UP_SUCCESS,
});
export const signUpFailureAction = (error) => ({
  type: SIGN_UP_FAILURE,
  error,
});

const initialState = {
  isLoading: false,
  me: null,
  loginErrorReason: '',
  signUpErrorReason: '',
  isSigningUp: false,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        me: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginErrorReason: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true, // 버튼 로딩이라는데..
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        me: null,
      };
    case LOAD_USER_REQUEST:
      return {
        ...state,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        me: action.data,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        loadUserErrorReason: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        signUpErrorReason: action.error,
      };
    default:
      return state;
  }
};
