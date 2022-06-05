import { InjectContants } from "@src/core/constants"
import { QuizEntity } from "@src/modules/quiz/domain/entities"
import { IGetAllQuizUseCase } from "@src/modules/quiz/domain/usecases/get_all_quiz_usecase"
import { useEffect, useState } from "react"
import { container } from "tsyringe"
import { quizDependences } from "../../quiz_binds"

quizDependences()
export const useQuestionController = () => {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<QuizEntity[]>([]);
  const getAllQuiz = container.resolve<IGetAllQuizUseCase>(InjectContants.GetAllQuizUseCase);
  useEffect(
    () => {
      const load = async () => {
        const response = await getAllQuiz.call();
        setQuizzes(response);
        setLoading(false);
      };
      load();
    },[]
  )
  return {
    getController: {
      loading,
      quizzes,
    }
  }
}
