import { useNavigation } from "@react-navigation/native"
import { GlobalState } from "@src/core/config/store/model"
import { InjectContants } from "@src/core/constants"
import {  IGetAllQuizUseCase } from "@src/modules/quiz/domain"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { container } from "tsyringe"
import { quizDependences } from "../../../binds"
import { quizAnswerSuccess, quizLoadSuccess, quizStatusLoading } from "../../../store"

quizDependences()
export const useQuestionController = () => {
  const state = useSelector((state:GlobalState) => state.quizReducer)
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
  const answerQuestion = (answer: string) => {
    dispatch(quizStatusLoading());
    dispatch(quizAnswerSuccess(answer));
    // Vefify if it is last question and navigate to results
    if (state.currentQuiz.currentCount == state.totalCount) {
        const screen:any = 'Result';
        navigation.navigate(screen);
      }
  };
  return {
    getController: {
      loading: state.loading,
      quiz: state.currentQuiz,
      totalCount: state.totalCount,
    },
    handlerController: {
      answerQuestion
    }
  }
}
