const INITIAL_STATE = {
  news: {},
  loading: true,
  page: '1',
  search: false,
  query: '',
};

export default function news(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_NEWS_REQUEST':
      return {
        ...state,
        loading: true,
        page: action.payload.page,
        search: false,
      };
    case 'GET_ALL_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload.data,
        loading: false,
      };
    case 'GET_COUNTRY_NEWS_REQUEST':
      return {
        ...state,
        country: action.payload.country,
        loading: true,
        search: false,
      };
    case 'GET_COUNTRY_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload.data,
        loading: false,
      };
    case 'SEARCH_NEWS_REQUEST':
      return {
        ...state,
        query: action.payload.query,
        loading: true,
      };
    case 'SEARCH_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload.data,
        loading: false,
        search: true,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload.page,
        loading: true,
      };
    default:
      return state;
  }
}
