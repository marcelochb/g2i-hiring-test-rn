import { QuizReducerConstants } from "@src/core/constants"
import { QuizEntity } from "../../domain/entities";

export const quizStatusLoading = () => {
  type: QuizReducerConstants.QUIZ_START_LOADING;
  payload: {};
}

export const quizLoadSuccess = (quizzes: QuizEntity[]) => {
  type: QuizReducerConstants.QUIZ_STATUS_SUCCESS;
  payload: {quizzes}
}

export const quizAnswerSuccess = (answer: boolean) => {
  type: QuizReducerConstants.QUIZ_ANSWER_SUCCESS;
  payload: {answer}
}
