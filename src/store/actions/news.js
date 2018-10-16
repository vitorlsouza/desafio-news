export const getAllNewsRequest = () => ({
  type: 'GET_ALL_NEWS_REQUEST',
});

export const getAllNewsSuccess = data => ({
  type: 'GET_ALL_NEWS_SUCCESS',
  payload: { data },
});

export const getCountryNewsRequest = country => ({
  type: 'GET_COUNTRY_NEWS_REQUEST',
  payload: { country },
});

export const getCountryNewsSuccess = data => ({
  type: 'GET_COUNTRY_NEWS_SUCCESS',
  payload: { data },
});

export const searchNewsRequest = query => ({
  type: 'SEARCH_NEWS_REQUEST',
  payload: { query },
});

export const searchNewsSuccess = data => ({
  type: 'SEARCH_NEWS_SUCCESS',
  payload: { data },
});
