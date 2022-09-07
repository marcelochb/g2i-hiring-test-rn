import 'reflect-metadata';
import { InjectContants } from "@src/core/constants";
import { getAllMock, QuizDatasource } from "@src/modules/quiz/external";
import { IQuizDatasource } from "@src/modules/quiz/infra/datasources";
import { container } from "tsyringe";
import mockAxios from 'jest-mock-axios';
import { ApiClient } from '@src/core/services';

describe('Quiz Datasources =>',() => {
  it("When request success, return QuizModel's array ", async () => {
    class ApiMockClient {
      getAll = jest.fn().mockImplementation(() => {
        return getAllMock;
      });
    };
    container.register(InjectContants.IApiClient,{useValue: new ApiMockClient()});
    // container.register(InjectContants.IApiClient,{useValue: new ApiClient({mockSimulate: false})});
    container.register(InjectContants.QuizDatasource,{useClass: QuizDatasource});
    // mockAxios.mockResponse(getAllMock);
    const quizDatasource = container.resolve<IQuizDatasource>(InjectContants.QuizDatasource);
    const response = await quizDatasource.getAllQuiz();
    expect(response).toEqual(getAllMock.data.results);
  })
  it("When request failure, return Error ", async () => {
    class ApiMockClient {
      getAll = jest.fn().mockRejectedValue(() =>{
        throw Error;
      });
    };
    container.register(InjectContants.IApiClient,{useValue: new ApiMockClient()});
    container.register(InjectContants.QuizDatasource,{useClass: QuizDatasource});

    const quizDatasource = container.resolve<IQuizDatasource>(InjectContants.QuizDatasource);
    try {
      await quizDatasource.getAllQuiz()
    } catch (error) {

      expect(error).toThrowError();
    }
  })
})
