import 'reflect-metadata';
import { InjectContants } from '@src/core/constants';
import { ApiClient } from '@src/core/services';
import { GetAllQuizUseCase, QuizEntity } from '@src/modules/quiz/domain';
import { QuizDatasource } from '@src/modules/quiz/external';
import { QuizRepository } from '@src/modules/quiz/infra/repositories';
import { container } from 'tsyringe';
import { useQuestionController } from '../../../../../../src/modules/quiz/presenter/screens/question/controller';
import renderer from 'react-test-renderer';
import { IQuizReducer } from '../../../../../../src/modules/quiz/presenter/store';
import {Question} from '../../../../../../src/modules/quiz/presenter/screens/question/view';
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
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
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

export const quizDependences = () => {
  container.register(InjectContants.IApiClient,{useValue: new ApiClient({mockSimulate: true})});
  container.register(InjectContants.IQuizDatasource,{useClass: QuizDatasource});
  container.register(InjectContants.IQuizRepository,{useClass: QuizRepository});
  container.register(InjectContants.GetAllQuizUseCase,{useClass: GetAllQuizUseCase});
}
describe('Question controller', () => {
  test("When load success, return QuizEntity[]", () => {
    const {getController} = useQuestionController();
    expect(getController.quiz).toStrictEqual({category: 'teste',question: 'teste', correct_answer: true})
  });
});
