import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "signup",
  initialState: {
    isOpen: false,
  },
  reducers: {
    signupOpened: (signup) => {
      signup.isOpen = true;
    },
    signupClosed: (signup) => {
      signup.isOpen = false;
    },
  },
});

export default slice.reducer;

const { signupClosed, signupOpened } = slice.actions;

// Action Creator
export const signupOpen = (dispatch) => dispatch({ type: signupOpened.type });
export const signupClose = (dispatch) => dispatch({ type: signupClosed.type });

// Selector
export const getSignupIsOpen = (state) => state.ui.signup.isOpen;
