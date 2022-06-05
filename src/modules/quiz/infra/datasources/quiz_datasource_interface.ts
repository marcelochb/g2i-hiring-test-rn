import { QuizModel } from "../models";

export interface IQuizDatasource {
  getAllQuiz(): Promise<QuizModel[]>;
}
