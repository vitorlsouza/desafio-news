import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import {
  getAllNewsSuccess,
  getCountryNewsSuccess,
  searchNewsSuccess,
  searchNewsFailure,
} from '../actions/news';

const apiKey = '9cc106745f644f49b652cd67c424c2f0';
const pageSize = 7;

export function* getAllNews(action) {
  const { data } = yield call(
    api.get,
    `everything?q=destaques&pageSize=${pageSize}&page=${action.payload.page}&apiKey=${apiKey}`,
  );

  const newsData = data;

  yield put(getAllNewsSuccess(newsData));
}

export function* getCountryNews(action) {
  const { data } = yield call(
    api.get,
    `everything?q=${action.payload.country}&pageSize=${pageSize}&page=${
      action.payload.page
    }&apiKey=${apiKey}`,
  );

  const newsData = data;

  yield put(getCountryNewsSuccess(newsData));
}

export function* searchNews(action) {
  try {
    const { data } = yield call(
      api.get,
      `everything?q=${action.payload.query}&pageSize=${pageSize}&page=${
        action.payload.page
      }&apiKey=${apiKey}`,
    );

    const newsData = data;

    yield put(searchNewsSuccess(newsData));
  } catch (error) {
    yield put(searchNewsFailure(true));
  }
}
