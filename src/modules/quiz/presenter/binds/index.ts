import { InjectContants } from "@src/core/constants"
import { ApiClient } from "@src/core/services"
import { container } from "tsyringe"
import { GetAllQuizUseCase } from "../../domain/usecases/get_all_quiz_usecase";
import { QuizDatasource } from "../../external/datasources/quiz_datasource";
import { QuizRepository } from "../../infra/repositories";

export const quizDependences = () => {
  container.register(InjectContants.IApiClient,{useValue: new ApiClient()});
  container.register(InjectContants.IQuizDatasource,{useClass: QuizDatasource});
  container.register(InjectContants.IQuizRepository,{useClass: QuizRepository});
  container.register(InjectContants.GetAllQuizUseCase,{useClass: GetAllQuizUseCase});
}
