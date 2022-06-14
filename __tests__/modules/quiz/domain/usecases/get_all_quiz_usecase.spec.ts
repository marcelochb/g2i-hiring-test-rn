import 'reflect-metadata';
import { InjectContants } from "@src/core/constants";
import { getAllMock } from "@src/modules/quiz/external";
import { container } from "tsyringe";
import { QuizModel, QuizRepository } from '@src/modules/quiz/infra';
import { GetAllQuizUseCase, IGetAllQuizUseCase, IQuizRepository } from '@src/modules/quiz/domain';

describe('Quiz Usecase =>',() => {
  it("When request success, return QuizEntities's array ", async () => {
    const responseQuizEntities = getAllMock.data.results.map(quiz => QuizModel.toEntity(quiz));
    class QuizMockRepository {
      getAll = jest.fn().mockImplementation(() => {
        return responseQuizEntities;
      });
    };
    container.register(InjectContants.IQuizRepository,{useValue: new QuizMockRepository()});
    container.register(InjectContants.GetAllQuizUseCase,{useClass: GetAllQuizUseCase});

    const getAllUsecase = container.resolve<IGetAllQuizUseCase>(InjectContants.GetAllQuizUseCase);
    const response = await getAllUsecase.call();
    expect(response).toEqual(responseQuizEntities);
  })
  it("When request failure, return Error ", async () => {
    class QuizMockRepository {
      getAll = jest.fn().mockRejectedValue(() =>{
        throw Error;
      });
    };
    container.register(InjectContants.IQuizRepository,{useValue: new QuizMockRepository()});
    container.register(InjectContants.GetAllQuizUseCase,{useClass: GetAllQuizUseCase});

    const getAllUsecase = container.resolve<IGetAllQuizUseCase>(InjectContants.GetAllQuizUseCase);
    try {
      await getAllUsecase.call()
    } catch (error) {

      expect(error).toThrowError();
    }
  })
})
