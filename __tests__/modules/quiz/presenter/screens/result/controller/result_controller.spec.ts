import 'reflect-metadata';
import { useResultController } from '@src/modules/quiz/presenter/screens/result/controller';
import { IQuizReducer } from '@src/modules/quiz/presenter';
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockImplementation(callback => {
    return callback({quizReducer: {
      loading: false,
      error: false,
      empty: false,
      quizzes: [{category: 'teste',question: 'teste', correct_answer: true}],
      currentQuiz: {category: 'teste',question: 'teste', correct_answer: true} as IQuizReducer,
      totalCount: 10,
      correctAnswers: 6
    }
    });
  })
}));

describe('Result controller', () => {
  test("When load success, return QuizEntity[]", () => {
    const {getController} = useResultController();
    expect(getController.quiz).toStrictEqual({
      loading: false,
      error: false,
      empty: false,
      quizzes: [{category: 'teste',question: 'teste', correct_answer: true}],
      currentQuiz: {category: 'teste',question: 'teste', correct_answer: true} as IQuizReducer,
      totalCount: 10,
      correctAnswers: 6
    })
  });
});
