import { QuizEntity } from "../../domain/entities";

interface IProps {
  category: string,
  question: string,
  correct_answer: boolean,
}

export class QuizModel extends QuizEntity {
  category: string;
  question: string;
  correct_answer: boolean;

  constructor({
    category,
    question,
    correct_answer,
  }:IProps) {
    super({ category, question, correct_answer: correct_answer })
    this.category = category;
    this.question = question;
    this.correct_answer = correct_answer;
  }

  static toEntity(quiz: QuizModel): QuizEntity {
    return new QuizEntity({
      category: quiz.category,
      question: quiz.question,
      correct_answer: quiz.correct_answer,
    })
  }

  static fromApi(body: any): QuizModel {
    return new QuizModel({
      category: body.category,
      question: body.question,
      correct_answer: body.correct_answer,
    })
  }

}
