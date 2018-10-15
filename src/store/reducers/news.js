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
    default:
      return state;
  }
}
