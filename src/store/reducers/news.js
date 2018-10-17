const INITIAL_STATE = {
  news: [],
  loading: false,
};

export default function news(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_NEWS_REQUEST':
      return {
        ...state,
        loading: true,
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
        query: action.payload.country,
        loading: true,
      };
    case 'SEARCH_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
}
