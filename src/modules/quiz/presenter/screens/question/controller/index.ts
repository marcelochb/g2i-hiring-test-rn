import { GlobalState } from "@src/core/config/store/model"
import { InjectContants } from "@src/core/constants"
import { QuizEntity, IGetAllQuizUseCase } from "@src/modules/quiz/domain"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { container } from "tsyringe"
import { quizDependences } from "../../../binds"
import { quizLoadSuccess, quizStatusLoading } from "../../../store"

quizDependences()
export const useQuestionController = () => {
  const state = useSelector((state:GlobalState) => state.quizReducer)
  const dispatch = useDispatch();
  const getAllQuiz = container.resolve<IGetAllQuizUseCase>(InjectContants.GetAllQuizUseCase);
  useEffect(
    () => {
      const load = async () => {
        dispatch(quizStatusLoading());
        const response = await getAllQuiz.call();
        dispatch(quizLoadSuccess(response));
      };
      load();
    },[]
  )
  return {
    getController: {
      loading: state.loading,
      quiz: state.currentQuiz,
    }
  }
}
