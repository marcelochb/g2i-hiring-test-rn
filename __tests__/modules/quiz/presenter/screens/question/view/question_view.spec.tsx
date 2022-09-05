

import 'reflect-metadata';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {create} from 'react-test-renderer';
import { QuizEntity } from '@src/modules/quiz/domain';
import { IQuizReducer, Question } from '@src/modules/quiz/presenter';
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn().mockImplementation(() => jest.fn()),
  useSelector: jest.fn().mockImplementation(callback => {
    return callback({quizReducer: {
      loading: false,
      error: false,
      empty: false,
      quizzes: [{category: 'teste',question: 'teste', correct_answer: true}],
      currentQuiz: {category: 'teste',question: 'teste', correct_answer: true} as IQuizReducer,
      totalCount: 1,
      correctAnswers: 0
    }
    });
  })
}));

describe('Question view', () => {
  test('When it loaded, should be returned current question', () => {
    const quizzes = [new QuizEntity({category:'Technology',correct_answer:false,question:'What is it?'})];
    const store = configureMockStore([])({quizzes});
    const component = create(
      <Provider store={store}>
        <Question />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
