import {combineReducers, createStore} from 'redux';
import {quizReducer} from '@src/modules/quiz/presenter';

export default createStore(combineReducers({quizReducer}));
