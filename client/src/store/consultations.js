import { createSlice, createSelector } from "@reduxjs/toolkit";

import { apiCallBegan } from "./api";
import { getAuth, getConfigHeader } from "./auth";

const initialState = {
  list: [],
  loading: false,
  lastFetch: null,
  message: "",
};

const slice = createSlice({
  name: "consultations",
  initialState,
  reducers: {
    consultationsRequested: (consultations) => {
      consultations.loading = true;
      consultations.message = "";
    },
    consultationsReceived: (consultations, action) => {
      consultations.list = action.payload;
      consultations.loading = false;
      consultations.lastFetch = Date.now();
    },
    consultationsRequestFailed: (consultations, action) => {
      consultations.loading = false;
      consultations.message = action.payload;
    },
    consultationRequested: (consultations) => {
      consultations.loading = true;
      consultations.message = "";
    },
    consultationReceived: (consultations, action) => {
      const { id, ...newData } = action.payload;

      consultations.list = consultations.list.length
        ? consultations.list.map((item) =>
            item.id === id ? { ...item, ...newData } : item
          )
        : [action.payload];
      consultations.loading = false;
      consultations.lastFetch = Date.now();
    },
    consultationRequestFailed: (consultations, action) => {
      consultations.loading = false;
      consultations.message = action.payload;
    },
    consultationAddRequested: (consultations) => {
      consultations.loading = true;
      consultations.message = "";
    },
    consultationAddReceived: (consultations, action) => {
      consultations.list.push(action.payload);
      consultations.loading = false;
    },
    consultationAddRequestFailed: (consultations, action) => {
      consultations.loading = false;
      consultations.message = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  consultationsRequested,
  consultationsReceived,
  consultationsRequestFailed,
  consultationRequested,
  consultationReceived,
  consultationRequestFailed,
  consultationAddRequested,
  consultationAddReceived,
  consultationAddRequestFailed,
} = slice.actions;

const url = "/consultations";

// Action Creators
export const loadConsultations = (dispatch, getState) => {
  const { token } = getAuth(getState());

  return dispatch(
    apiCallBegan({
      url: url,
      ...getConfigHeader(token),
      onStart: consultationsRequested.type,
      onSuccess: consultationsReceived.type,
      onError: consultationsRequestFailed.type,
    })
  );
};

export const loadConsultationById = (id) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/consultation/${id}`,
      ...getConfigHeader(token),
      onStart: consultationRequested.type,
      onSuccess: consultationReceived.type,
      onError: consultationRequestFailed.type,
    })
  );
};

export const updateConsultation = (id, data) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/consultation/${id}`,
      ...getConfigHeader(token),
      method: "patch",
      data: data,
      onStart: consultationRequested.type,
      onSuccess: consultationReceived.type,
      onError: consultationRequestFailed.type,
    })
  );
};

export const replyConsultation = (id, data) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/consultation/${id}/reply`,
      ...getConfigHeader(token),
      method: "POST",
      data: data,
      onStart: consultationRequested.type,
      onSuccess: consultationReceived.type,
      onError: consultationRequestFailed.type,
    })
  );
};

export const addConsultation = (data) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/consultation`,
      ...getConfigHeader(token),
      method: "post",
      data: data,
      onStart: consultationAddRequested.type,
      onSuccess: consultationAddReceived.type,
      onError: consultationAddRequestFailed.type,
    })
  );
};

// Selector
export const getConsultations = (state) => state.entities.consultations;

export const getConsultationById = (id) =>
  createSelector(getConsultations, (consultations) => {
    const consultation = consultations.list.find(
      (item) => String(item.id) === String(id)
    );
    return consultation;
  });
