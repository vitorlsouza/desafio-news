import { all, takeLatest } from 'redux-saga/effects';

import { getAllNews, getCountryNews } from './news';

export default function* rootSaga() {
  yield all([takeLatest('GET_ALL_NEWS_REQUEST', getAllNews)]);
  yield all([takeLatest('GET_COUNTRY_NEWS_REQUEST', getCountryNews)]);
}
