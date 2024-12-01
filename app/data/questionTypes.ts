import { SubjectArea } from './examTypes';

export type QuestionImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BaseQuestion = {
  id: string;
  text: string;
  image?: QuestionImage;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subjectArea: SubjectArea;
  difficulty?: 'easy' | 'medium' | 'hard';
  references?: {
    document: string;
    section: string;
    description?: string;
  }[];
  tags?: string[];
};

export type MultipleChoiceQuestion = BaseQuestion & {
  type: 'multiple-choice';
};

export type TrueFalseQuestion = BaseQuestion & {
  type: 'true-false';
  options: ['True', 'False'];
};

export type Question = MultipleChoiceQuestion | TrueFalseQuestion;

// Validation functions
export function validateQuestion(question: Question): boolean {
  // Basic validation
  if (!question.id || !question.text || !question.options || question.correctAnswer === undefined) {
    return false;
  }

  // Validate correct answer is within options range
  if (question.correctAnswer < 0 || question.correctAnswer >= question.options.length) {
    return false;
  }

  // Type-specific validation
  if (question.type === 'true-false' && 
      (question.options.length !== 2 || 
       question.options[0] !== 'True' || 
       question.options[1] !== 'False')) {
    return false;
  }

  return true;
} 