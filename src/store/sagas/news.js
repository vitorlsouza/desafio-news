import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { getAllNewsSuccess, getCountryNewsSuccess, searchNewsSuccess } from '../actions/news';

const apiKey = '9cc106745f644f49b652cd67c424c2f0';
const pageSize = 7;

export function* getAllNews(action) {
  console.log(action.payload.page);
  const { data } = yield call(
    api.get,
    `top-headlines?q=Trump&pageSize=${pageSize}&page=${action.payload.page}&apiKey=${apiKey}`,
  );

  const newsData = data;

  yield put(getAllNewsSuccess(newsData));
}

export function* getCountryNews(action) {
  const { data } = yield call(
    api.get,
    `top-headlines?country=${action.payload.country}&apiKey=${apiKey}`,
  );

  const newsData = data.articles;

  yield put(getCountryNewsSuccess(newsData));
}

export function* searchNews(action) {
  const { data } = yield call(api.get, `everything?q=${action.payload.query}&apiKey=${apiKey}`);

  const newsData = data.articles;

  yield put(searchNewsSuccess(newsData));
}
