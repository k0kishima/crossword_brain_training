import { combineReducers } from 'redux';
import questionReducer from 'store/question/slice';
import answerReducer from 'store/answer/slice';

const rootReducer = combineReducers({
  question: questionReducer,
  answer: answerReducer,
});

export default rootReducer;
