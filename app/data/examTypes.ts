import { Question, validateQuestion } from './questionTypes';

export enum ExamLevel {
  RPL = "Recreational Pilot Licence (RPL)",
  PPL = "Private Pilot Licence (PPL)",
  CPL = "Commercial Pilot Licence (CPL)",
}

export enum SubjectArea {
  AIR_LAW = "Air Law",
  FLIGHT_RULES = "Flight Rules",
  AIRCRAFT_KNOWLEDGE = "Aircraft Knowledge",
  NAVIGATION = "Navigation",
  METEOROLOGY = "Meteorology",
  HUMAN_FACTORS = "Human Factors",
  COMPREHENSIVE = "Comprehensive",
}

export type KnowledgeTestMetadata = {
  id: string;
  level: ExamLevel;
  subjectArea: SubjectArea;
  title: string;
  description: string;
  timeLimit: number;
  passingScore: number;
  version: string;
  lastUpdated: string;
  tags?: string[];
};

export type KnowledgeTest = KnowledgeTestMetadata & {
  questions: Question[];
};

export type Exam = KnowledgeTest;

export type PracticeExam = {
  id: string;
  level: ExamLevel;
  subjectArea: SubjectArea;
  title: string;
  description: string;
  timeLimit: number;
  passingScore: number;
  version: string;
  lastUpdated: string;
  questions: Question[];
  isOfficialFormat: true;
  examInstructions: string[];
  allowedMaterials: string[];
};

export function validateExam(exam: KnowledgeTest): boolean {
  if (!exam.id || !exam.title || exam.questions.length === 0) {
    return false;
  }

  const allQuestionsValid = exam.questions.every(q => validateQuestion(q));
  if (!allQuestionsValid) {
    return false;
  }

  if (exam.timeLimit <= 0 || exam.passingScore <= 0 || exam.passingScore > 100) {
    return false;
  }

  return true;
} 