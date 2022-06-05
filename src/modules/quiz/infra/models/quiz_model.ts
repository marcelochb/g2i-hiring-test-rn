import { QuizEntity } from "../../domain/entities";

interface IProps {
  category: string,
  question: string,
  correct_anwser: boolean,
}

export class QuizModel extends QuizEntity {
  category: string;
  question: string;
  correct_anwser: boolean;

  constructor({
    category,
    question,
    correct_anwser,
  }:IProps) {
    super({ category, question, correct_anwser })
    this.category = category;
    this.question = question;
    this.correct_anwser = correct_anwser;
  }

  static toEntity(quiz: QuizModel): QuizEntity {
    return new QuizEntity({
      category: quiz.category,
      question: quiz.question,
      correct_anwser: quiz.correct_anwser,
    })
  }

  static fromApi(body: any): QuizModel {
    return new QuizModel({
      category: body.category,
      question: body.question,
      correct_anwser: body.correct_anwser,
    })
  }

}
