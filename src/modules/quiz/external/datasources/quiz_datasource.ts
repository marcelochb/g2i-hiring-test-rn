import { InjectContants } from "@src/core/constants";
import { IApiClient } from "@src/core/services";
import { AxiosResponse } from "axios";
import { inject, injectable } from "tsyringe";
import { IQuizDatasource } from "../../infra/datasources";
import { QuizModel } from "../../infra/models";
import { getAllMock } from "../mocks/quiz_mock";
interface IProps {
  results: QuizModel[]
}
@injectable()
export class QuizDatasource implements IQuizDatasource {
  constructor(
    @inject(InjectContants.IApiClient)
    private readonly apiClient: IApiClient
  ) {}

  async getAllQuiz(): Promise<QuizModel[]> {
      const response =  await this.apiClient.getAll<IProps>({mockAxiosResponse:getAllMock}) as AxiosResponse<IProps>;
      const parsedResponse = response.data.results.map(body => QuizModel.fromApi(body));
      return parsedResponse;
  }
}
