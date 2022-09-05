import 'reflect-metadata';
import { InjectContants } from '@src/core/constants';
import {  QuizEntity } from '@src/modules/quiz/domain';
import { renderHook } from "@testing-library/react-hooks";
import { act} from 'react-test-renderer';
import { container } from 'tsyringe';
import { useQuestionController } from '../../../../../../../src/modules/quiz/presenter/screens/question/controller';
import { IQuizReducer } from '../../../../../../../src/modules/quiz/presenter/store';
const quiz =  {category: 'teste',question: 'teste', correct_answer: true, currentCount: 1} as IQuizReducer;
function sleep(ms:number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn().mockImplementation(() => {return {navigate: jest.fn()}} ),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn().mockImplementation(() => jest.fn()),
  useSelector: jest.fn().mockImplementation(callback => callback({quizReducer: {
      loading: false,
      error: false,
      empty: false,
      quizzes: [{category: 'teste',question: 'teste', correct_answer: true}],
      currentQuiz: quiz,
      totalCount: 1,
      correctAnswers: 0}}))
}));

describe('Question controller', () => {
  test("If it loaded on success, should returned QuizEntity array", async () => {
    const quizzes = [new QuizEntity({category:'Technology',correct_answer:false,question:'What is it?'})];
    class QuizMockGetAllQuizUseCase {
      call = jest.fn().mockImplementation(() => quizzes);
    };
    container.register(InjectContants.GetAllQuizUseCase,{useValue: new QuizMockGetAllQuizUseCase()});

    const { result } = renderHook(() => useQuestionController());
    result.current.handlerController.answerQuestion('true');
    expect(result.current.getController.quiz).toEqual(quiz);
  });
  test("If it loaded empty, should returned empty array", async () => {
    class QuizMockGetAllQuizUseCase {
      call = jest.fn().mockImplementation(() => []);
    };
    container.register(InjectContants.GetAllQuizUseCase,{useValue: new QuizMockGetAllQuizUseCase()});

    const { result } = renderHook(() => useQuestionController());
    expect(result.current.getController.quiz).toEqual(quiz);
  });
  test("If it loaded with failure, should returned error state", async () => {
    class QuizMockGetAllQuizUseCase {
      call = jest.fn().mockRejectedValue(() =>{
        throw Error;
      });
    };
    container.register(InjectContants.GetAllQuizUseCase,{useValue: new QuizMockGetAllQuizUseCase()});

    const { result } = renderHook(() => useQuestionController());
    expect(result.current.getController.quiz).toEqual(quiz);
  });
});
