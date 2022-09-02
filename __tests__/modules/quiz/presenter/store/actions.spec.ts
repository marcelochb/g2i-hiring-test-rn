import 'reflect-metadata';
import { QuizReducerConstants } from "@src/core/constants"
import { QuizEntity } from "@src/modules/quiz/domain";
import * as Actions from '@src/modules/quiz/presenter/store/actions';
describe('Actions',() => {
  test('quizStatusLoading', () => {
    const expected = {
      type: QuizReducerConstants.QUIZ_START_LOADING,
      payload: {}
    }
    expect(Actions.quizStatusLoading()).toStrictEqual(expected);
  })
  test('quizLoadFailure', () => {
    const expected = {
      type: QuizReducerConstants.QUIZ_STATUS_FAILURE,
      payload: {}
    }
    expect(Actions.quizLoadFailure()).toStrictEqual(expected);
  })
  test('quizLoadEmpty', () => {
    const expected = {
      type: QuizReducerConstants.QUIZ_STATUS_EMPTY,
      payload: {}
    }
    expect(Actions.quizLoadEmpty()).toStrictEqual(expected);
  })
  test('quizLoadSuccess', () => {
    const quizzes = [new QuizEntity({category: 'Development',correct_answer: true, question: 'What is frontend?'})]
    const expected = {
      type: QuizReducerConstants.QUIZ_STATUS_SUCCESS,
      payload: {quizzes}
    }
    expect(Actions.quizLoadSuccess(quizzes)).toStrictEqual(expected);
  })
  test('quizAnswerSuccess', () => {
    const answer = 'true';
    const expected = {
      type: QuizReducerConstants.QUIZ_ANSWER_SUCCESS,
      payload: {answer}
    }
    expect(Actions.quizAnswerSuccess(answer)).toStrictEqual(expected);
  })
})
