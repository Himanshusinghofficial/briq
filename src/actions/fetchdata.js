import { FETCHDATA, ADDFAV, ADDSIM } from '../constants/actionTypes';
import * as api from '../api/index';

export const fetchdata = () => async (dispatch) => {
  try {
    const { data } = await api.fetchdata();
    dispatch({ type: FETCHDATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addfav = (author,text,value) => async (dispatch) => {
  try {
    dispatch({ type: ADDFAV, payload: {author,text,value} });
  } catch (error) {
    console.log(error.message);
  }
};

export const addsimilarity = (value) => async (dispatch) => {
  try {
    dispatch({ type: ADDSIM, payload: value });
  } catch (error) {
    console.log(error.message);
  }
};


