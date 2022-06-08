import { QuizEntity } from "@src/modules/quiz/domain/entities";

export interface IQuizReducer extends QuizEntity {
  answered?: boolean;
  currentCount?: Number;
}
export interface IQuizInitialState {
  loading: boolean,
  quizzes: IQuizReducer[],
  currentQuiz: IQuizReducer,
  totalCount: Number,
  correctAnswers: Number,
}

interface IActionPayload {
  answer: boolean,
  quizzes: QuizEntity[]
}

export interface IQuizActions {
  payload: IActionPayload;
  type: string;
}
