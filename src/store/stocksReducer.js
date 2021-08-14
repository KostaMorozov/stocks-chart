//Action types
const GET_STOCKS = "getStocks";

// Action creator

export function getStokesFromStore(stocks) {
  return {
    type: GET_STOCKS,
    payload: { stocks },
  };
}

// Reducer (should be default export)

export default function stocksReducer(state = [], action) {
  switch (action.type) {
    case GET_STOCKS:
      return [
        ...state,
        {
          stocks: action.payload.stocks,
        },
      ];
    default:
      return state;
  }
}
