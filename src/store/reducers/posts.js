import CONTANTS from "../constants/commonConstants";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTANTS.GET_POST:
      return { ...state, posts: action.paylpad };
    default:
      return state;
  }
};

export default postReducer;
