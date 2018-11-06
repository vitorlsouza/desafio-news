export const getAllNewsRequest = page => ({
  type: 'GET_ALL_NEWS_REQUEST',
  payload: { page },
});

export const getAllNewsSuccess = data => ({
  type: 'GET_ALL_NEWS_SUCCESS',
  payload: { data },
});

export const getCountryNewsRequest = (country, page) => ({
  type: 'GET_COUNTRY_NEWS_REQUEST',
  payload: { country, page },
});

export const getCountryNewsSuccess = data => ({
  type: 'GET_COUNTRY_NEWS_SUCCESS',
  payload: { data },
});

export const searchNewsRequest = (query, page) => ({
  type: 'SEARCH_NEWS_REQUEST',
  payload: { query, page },
});

export const searchNewsSuccess = data => ({
  type: 'SEARCH_NEWS_SUCCESS',
  payload: { data },
});

export const searchNewsFailure = error => ({
  type: 'SEARCH_NEWS_FAILURE',
  payload: { error },
});

export const changePage = page => ({
  type: 'CHANGE_PAGE',
  payload: { page },
});
