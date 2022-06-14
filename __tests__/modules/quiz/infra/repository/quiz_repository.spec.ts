import 'reflect-metadata';
import { InjectContants } from "@src/core/constants";
import { getAllMock } from "@src/modules/quiz/external";
import { container } from "tsyringe";
import { QuizRepository } from '@src/modules/quiz/infra';
import { IQuizRepository } from '@src/modules/quiz/domain';

describe('Quiz Repository =>',() => {
  it("When request success, return QuizModel's array ", async () => {
    class QuizMockDatasource {
      getAllQuiz = jest.fn().mockImplementation(() => {
        return getAllMock.data.results;
      });
    };
    container.register(InjectContants.IQuizDatasource,{useValue: new QuizMockDatasource()});
    container.register(InjectContants.QuizRepository,{useClass: QuizRepository});

    const quizRepository = container.resolve<IQuizRepository>(InjectContants.QuizRepository);
    const response = await quizRepository.getAll();
    expect(response).toEqual(getAllMock.data.results);
  })
  it("When request failure, return Error ", async () => {
    class QuizMockDatasource {
      getAllQuiz = jest.fn().mockRejectedValue(() =>{
        throw Error;
      });
    };
    container.register(InjectContants.IQuizDatasource,{useValue: new QuizMockDatasource()});
    container.register(InjectContants.QuizRepository,{useClass: QuizRepository});

    const quizRepository = container.resolve<IQuizRepository>(InjectContants.QuizRepository);
    try {
      await quizRepository.getAll()
    } catch (error) {

      expect(error).toThrowError();
    }
  })
})
