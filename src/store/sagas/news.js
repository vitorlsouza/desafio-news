import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { getAllNewsSuccess, getCountryNewsSuccess, searchNewsSuccess } from '../actions/news';

const apiKey = '9cc106745f644f49b652cd67c424c2f0';

export function* getAllNews() {
  const { data } = yield call(api.get, `top-headlines?country=us&apiKey=${apiKey}`);

  const newsData = data.articles;

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
