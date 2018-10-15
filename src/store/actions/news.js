export const getAllNewsRequest = () => ({
  type: 'GET_ALL_NEWS_REQUEST',
});

export const getAllNewsSuccess = data => ({
  type: 'GET_ALL_NEWS_SUCCESS',
  payload: { data },
});
