import {combineReducers, createStore} from 'redux';
import {QuizReducer} from '@src/modules/quiz/presenter';

export default createStore(combineReducers({QuizReducer}));
