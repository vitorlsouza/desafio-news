import { all, takeLatest } from 'redux-saga/effects';

import { getAllNews } from './news';

export default function* rootSaga() {
  yield all([takeLatest('GET_ALL_NEWS_REQUEST', getAllNews)]);
}
