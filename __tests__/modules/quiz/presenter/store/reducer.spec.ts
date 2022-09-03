import 'reflect-metadata';
import { QuizReducerConstants } from "@src/core/constants"
import { IQuizActions, IQuizInitialState, IQuizReducer, quizReducer } from '@src/modules/quiz/presenter';
import { QuizEntity } from '@src/modules/quiz/domain';

const INITIAL_STATE:IQuizInitialState = {
  loading: false,
  error: false,
  empty: false,
  quizzes: [],
  currentQuiz: {} as IQuizReducer,
  totalCount: 0,
  correctAnswers: 0
}
describe('QuizReducer', () => {
  test('should set initial state by default', () => {
    const actions = {
      type: 'unknow',
      payload:{answer: true, quizzes: []}
    };
    const expected = INITIAL_STATE;
    expect(quizReducer(undefined,actions)).toEqual(expected);
  });
  test('should handle QUIZ_START_LOADING', () => {
    const actions = {
      type: QuizReducerConstants.QUIZ_START_LOADING,
      payload:{answer: true, quizzes: []}
    };
    const expected = {
      ...INITIAL_STATE,
      loading: true,
    };
    expect(quizReducer(INITIAL_STATE,actions)).toEqual(expected);
  });
  test('should handle QUIZ_STATUS_FAILURE', () => {
    const actions = {
      type: QuizReducerConstants.QUIZ_STATUS_FAILURE,
      payload:{answer: true, quizzes: []}
    };
    const expected = {
      ...INITIAL_STATE,
      loading: false,
      error: true,
    };
    expect(quizReducer(INITIAL_STATE,actions)).toEqual(expected);
  });
  test('should handle QUIZ_STATUS_EMPTY', () => {
    const actions = {
      type: QuizReducerConstants.QUIZ_STATUS_EMPTY,
      payload:{answer: true, quizzes: []}
    };
    const expected = {
      ...INITIAL_STATE,
      loading: false,
      error: false,
      empty: true,
    };
    expect(quizReducer(INITIAL_STATE,actions)).toEqual(expected);
  });
  test('should handle QUIZ_STATUS_SUCCESS', () => {
    const quiz = new QuizEntity({category: 'Development',correct_answer: true, question: 'What is frontend?'});
    const actions = {
      type: QuizReducerConstants.QUIZ_STATUS_SUCCESS,
      payload:{answer: true, quizzes: [quiz]}
    };
    const expected = {
      ...INITIAL_STATE,
      totalCount: 1,
      quizzes: [quiz],
      currentQuiz: {
        ...quiz,
        currentCount:1,
      },
    };
    expect(quizReducer(INITIAL_STATE,actions)).toEqual(expected);
  });
  test('should handle QUIZ_ANSWER_SUCCESS', () => {
    const quiz = new QuizEntity({category: 'Development',correct_answer: true, question: 'What is frontend?'});
    const actions = {
      type: QuizReducerConstants.QUIZ_ANSWER_SUCCESS,
      payload:{answer: true, quizzes: []}
    };
    const state = {
      ...INITIAL_STATE,
      totalCount: 2,
      quizzes: [quiz,quiz],
      currentQuiz: {
        ...quiz,
        currentCount:1,
      },
    };
    const expected = {
      ...INITIAL_STATE,
      totalCount: 2,
      correctAnswers: 1,
      quizzes: [{...quiz,answered:true},{...quiz,answered:true}],
      currentQuiz: {},
    };
    expect(quizReducer(state,actions)).toEqual(expected);
  });
})
