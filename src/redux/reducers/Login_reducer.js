import { createSlice } from "@reduxjs/toolkit";
const Login_reducer = createSlice({
  name: "Login",
  initialState: {
    loginUser: {},
    loading: false,
    error: "",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    LoginUserSuccess: (state, action) => {
      if (action.payload) {
        state.loading = false;
        state.loginUser = action.payload;
      }
    },
    LoginUserFailure: (state, action) => {
      state.loading = false;
      state.loginUser = {};
      state.error = action.payload;
    },
  },
});

export const { setLoading, LoginUserSuccess, LoginUserFailure } =
  Login_reducer.actions;
export default Login_reducer.reducer;
