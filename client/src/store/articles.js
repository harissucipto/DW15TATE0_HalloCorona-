import { createSlice, createSelector } from "@reduxjs/toolkit";

import { apiCallBegan } from "./api";
import { getAuth, getConfigHeader } from "./auth";

const slice = createSlice({
  name: "articles",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    message: "",
  },
  reducers: {
    articlesRequested: (articles) => {
      articles.loading = true;
      articles.message = "";
    },
    articlesReceived: (articles, action) => {
      articles.list = action.payload;
      articles.loading = false;
      articles.lastFetch = Date.now();
    },
    articlesRequestFailed: (articles, action) => {
      articles.loading = false;
      articles.message = action.payload;
    },
    articleRequested: (articles) => {
      articles.loading = true;
      articles.message = "";
    },
    articleReceived: (articles, action) => {
      const { id, ...newData } = action.payload;

      articles.list = articles.list.length
        ? articles.list.map((item) =>
            item.id === id ? { ...item, ...newData } : item
          )
        : [action.payload];
      articles.loading = false;
      articles.lastFetch = Date.now();
    },
    articleRequestFailed: (articles, action) => {
      articles.loading = false;
      articles.message = action.payload;
    },
    articleCreateRequested: (articles) => {
      articles.loading = true;
      articles.message = "";
    },
    articleCreateReceived: (articles, action) => {
      articles.list.push(action.payload);
      articles.loading = false;
      articles.lastFetch = Date.now();
    },
    articleCreateFailed: (articles, action) => {
      articles.loading = false;
      articles.message = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  articlesRequested,
  articlesReceived,
  articlesRequestFailed,
  articleRequested,
  articleReceived,
  articleRequestFailed,
  articleCreateRequested,
  articleCreateReceived,
  articleCreateFailed,
} = slice.actions;

const url = "/articles";

// Action Creators
export const loadArticles = (query) => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url: `${url}?${query}`,
      onStart: articlesRequested.type,
      onSuccess: articlesReceived.type,
      onError: articlesRequestFailed.type,
    })
  );
};

export const loadArticleById = (id) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url: `article/${id}`,
      onStart: articleRequested.type,
      onSuccess: articleReceived.type,
      onError: articleRequestFailed.type,
    })
  );
};

export const articleCreate = (article) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/article`,
      ...getConfigHeader(token),
      method: "post",
      data: article,
      onStart: articleCreateRequested.type,
      onSuccess: articleCreateReceived.type,
      onError: articleCreateFailed.type,
    })
  );
};

// Selector
export const getArticles = (state) => state.entities.articles;

export const getArticleById = (id) =>
  createSelector(getArticles, (articles) => {
    const article = articles.list.find(
      (item) => String(item.id) === String(id)
    );
    return article;
  });
