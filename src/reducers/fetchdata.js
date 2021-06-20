import { FETCHDATA, ADDFAV, ADDSIM } from '../constants/actionTypes';

const initialState = {
    apidata: null,
    favdata: [],
    loading: true,
    similarity: null
  };

const fetchdata = (state = initialState, action) => {
  switch (action.type) {
    case FETCHDATA:
      return {
        ...state,
        apidata: action.payload
      }
      case ADDFAV:
      return {
        ...state,
        favdata: [...state.favdata,action.payload]
      }
      case ADDSIM:
      return {
        ...state,
        similarity: action.payload
      }
    default:
      return state;
  }
};

export default fetchdata