import { QuizReducerConstants } from '@src/core/constants';
import producer from 'immer';
import { IQuizActions, IQuizInitialState, IQuizReducer } from './model';

const INITIAL_STATE:IQuizInitialState = {
  loading: false,
  quizzes: [],
  currentQuiz: {} as IQuizReducer,
  totalCount: 0
}

export const quizReducer = (
  state = INITIAL_STATE,
  action: IQuizActions,
) => {
  return producer(state, draft => {
    switch (action.type) {
      case QuizReducerConstants.QUIZ_START_LOADING: {
        draft.loading = true;
        break;
      }
      case QuizReducerConstants.QUIZ_STATUS_SUCCESS: {
        draft.quizzes = action.payload.quizzes;
        draft.quizzes.forEach((quiz, index) => {
          draft.quizzes[index].question = quiz.question.replace(/&#039;/g, "'").replace(/&quot;/g, '"');
          draft.quizzes[index].currentCount = index + 1;
        })
        const firstQuiz = draft.quizzes.find(quiz => quiz.answered == undefined);
        draft.currentQuiz = { ...firstQuiz } as IQuizReducer;
        draft.totalCount = action.payload.quizzes.length;
        draft.loading = false;
        break;
      }
      case QuizReducerConstants.QUIZ_ANSWER_SUCCESS: {
        draft.currentQuiz.answered = action.payload.answer;
        draft.quizzes.forEach((quiz,index) => {
          if (draft.currentQuiz.category == quiz.category &&
            draft.currentQuiz.question == quiz.question &&
            draft.currentQuiz.correct_answer == quiz.correct_answer) {
              draft.quizzes[index] = { ...quiz, answered: action.payload.answer }
          }
        })
        const firstQuiz = draft.quizzes.find(quiz => quiz.answered == undefined);
        draft.currentQuiz = { ...firstQuiz } as IQuizReducer;
        draft.loading = false;
        break;
      }
    }
  })
}
