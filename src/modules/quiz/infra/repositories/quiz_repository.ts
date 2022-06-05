import { InjectContants } from "@src/core/constants";
import { inject, injectable } from "tsyringe";
import { QuizEntity } from "../../domain/entities";
import { IQuizRepository } from "../../domain/repositories";
import { IQuizDatasource } from "../datasources";
import { QuizModel } from "../models";

@injectable()
export class QuizRepository implements IQuizRepository {
  constructor(
    @inject(InjectContants.IQuizDatasource)
    private readonly datasource: IQuizDatasource
  ) {}
  async getAll(): Promise<QuizEntity[]> {
    const result = await this.datasource.getAllQuiz() as QuizModel[];
    const parsedResult = result.map(quiz => QuizModel.toEntity(quiz));
    return parsedResult;
  }

}
