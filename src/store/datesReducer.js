//Action types
const GET_DATES = "getDates";

//Action creator

export function getDatesFromStore(dates) {
  return {
    type: GET_DATES,
    payload: { dates },
  };
}

//Reducer

export default function datesReducer(state = [], action) {
  switch (action.type) {
    case GET_DATES:
      return [
        ...state,
        {
          dates: action.payload.dates,
        },
      ];
    default:
      return state;
  }
}
