import 'reflect-metadata';
import { InjectContants } from '@src/core/constants';
import { ApiClient } from '@src/core/services';
import { GetAllQuizUseCase, QuizEntity } from '@src/modules/quiz/domain';
import { QuizDatasource } from '@src/modules/quiz/external';
import { QuizRepository } from '@src/modules/quiz/infra/repositories';
import { container } from 'tsyringe';
import { useQuestionController } from '.';

export const quizDependences = () => {
  container.register(InjectContants.IApiClient,{useValue: new ApiClient({mockSimulate: true})});
  container.register(InjectContants.IQuizDatasource,{useClass: QuizDatasource});
  container.register(InjectContants.IQuizRepository,{useClass: QuizRepository});
  container.register(InjectContants.GetAllQuizUseCase,{useClass: GetAllQuizUseCase});
}
describe('Question controller', () => {
  it("When load success, return QuizEntity[]", () => {
    const {getController} = useQuestionController();
    expect(getController.quiz).toBe([new QuizEntity({category: 'teste',question: 'teste', correct_answer: true})])
  });
});
