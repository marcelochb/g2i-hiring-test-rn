import { QuizReducerConstants } from "@src/core/constants"
import { QuizEntity } from "../../domain/entities";

export const quizStatusLoading = () => {
  return {
    type: QuizReducerConstants.QUIZ_START_LOADING,
    payload: {},
  }
}

export const quizLoadSuccess = (quizzes: QuizEntity[]) => {
  return {
    type: QuizReducerConstants.QUIZ_STATUS_SUCCESS,
    payload: {quizzes}
  }
}

export const quizAnswerSuccess = (answer: boolean) => {
  return {
    type: QuizReducerConstants.QUIZ_ANSWER_SUCCESS,
    payload: {answer}
  }
}
