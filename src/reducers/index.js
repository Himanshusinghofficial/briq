  
import { combineReducers } from 'redux';
import fetchdata from './fetchdata';

export default combineReducers({ data:fetchdata });