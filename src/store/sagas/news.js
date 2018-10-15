import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { getAllNewsSuccess } from '../actions/news';

export function* getAllNews() {
  const { data } = yield call(
    api.get,
    'top-headlines?country=us&apiKey=9cc106745f644f49b652cd67c424c2f0',
  );

  const newsData = data.articles;

  yield put(getAllNewsSuccess(newsData));
}
