import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "signin",
  initialState: {
    isOpen: false,
  },
  reducers: {
    signinOpened: (signin) => {
      signin.isOpen = true;
    },
    signinClosed: (signin) => {
      signin.isOpen = false;
    },
  },
});

export default slice.reducer;

const { signinClosed, signinOpened } = slice.actions;

// Action Creator
export const signinOpen = (dispatch) => dispatch({ type: signinOpened.type });
export const signinClose = (dispatch) => dispatch({ type: signinClosed.type });

// Selector
export const getSigninIsOpen = (state) => state.ui.signin.isOpen;
