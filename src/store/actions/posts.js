import axios from "axios";
import CONTANTS from "../constants/commonConstants";

const get_Posts = (data) => ({
  type: CONTANTS.GET_POST,
  payload: data,
});

export const getPosts = (userId) => {
  return async (dispatch) => {
    axios
      .get("http://localhost:7000/api/posts/get-posts/:authorId")
      .then((res) => {
        console.log(res.data)
        dispatch(get_Posts(res.data));
      })
      .catch((error) => console.log(error));
  };
};
