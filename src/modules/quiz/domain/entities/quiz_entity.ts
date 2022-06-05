interface IProps {
  category: string,
  question: string,
  correct_anwser: boolean,
}

export class QuizEntity {
  category: string;
  question: string;
  correct_anwser: boolean;

  constructor ({
    category,
    question,
    correct_anwser,
  }:IProps) {
    this.category = category;
    this.question = question;
    this.correct_anwser = correct_anwser;
  }
}
