const initialState = {};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_USERS_START": {
      return {
        ...state,
        fetching: true
      }
      break;
    }
    case "RECIEVE_USERS": {
      return {
        ...state,
        users: action.payload,
        fetching: false,
        fetched: true
      };
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break;
    }
  }
  return state;
}

export default reducer;
