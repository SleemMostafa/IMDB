
import { combineReducers } from 'redux';
import Pagereducer from './Pagereducer';
import reducer from './reducer';
const combineReducer = combineReducers({
    Pageindex:Pagereducer,
    Spinner:reducer
})

export default combineReducer