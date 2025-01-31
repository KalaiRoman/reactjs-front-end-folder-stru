import axios from "axios";
import { LoginUserFailure, LoginUserSuccess, setLoading } from "../reducers/Login_reducer";

export const LoginUser_action = (data) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (response) {
      console.log(response?.data);
      dispatch(LoginUserSuccess(response?.data));
    }
  } catch (error) {
    dispatch(LoginUserFailure(error?.response?.data?.message));
  }
};
