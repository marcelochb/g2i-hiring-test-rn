import { QuizEntity } from "@src/modules/quiz/domain/entities";

export interface IQuizReducer extends QuizEntity {
  answered?: boolean;
}
export interface IQuizInitialState {
  loading: boolean,
  quizzes: IQuizReducer[],
  currentQuiz: IQuizReducer,
  totalCount: Number,
}

interface IActionPayload {
  answer: boolean,
  quizzes: QuizEntity[]
}

export interface IQuizActions {
  payload: IActionPayload;
  type: string;
}
