import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const pplAirLawExam: Exam = {
  id: "ppl-al-001",
  level: ExamLevel.PPL,
  subjectArea: SubjectArea.AIR_LAW,
  title: "PPL Air Law Knowledge Test",
  description: "Practice questions for PPL Air Law examination",
  timeLimit: 60,
  passingScore: 75,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "ppl-al-001",
      type: "multiple-choice",
      text: "What is the minimum fuel reserve required for a VFR flight?",
      options: [
        "30 minutes fixed reserve",
        "45 minutes fixed reserve",
        "Variable reserve",
        "No reserve required"
      ],
      correctAnswer: 1,
      explanation: "For PPL operations, a fixed fuel reserve of 45 minutes must be carried for all VFR flights",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "CAO 20.2",
        section: "2.1",
        description: "Fuel requirements"
      }]
    },
    {
      id: "ppl-al-002",
      type: "multiple-choice",
      text: "What are the recency requirements for carrying passengers as a PPL holder?",
      options: [
        "3 takeoffs and landings in the last 90 days",
        "3 takeoffs and landings in the last 30 days",
        "1 hour of flight time in the last 30 days",
        "No specific requirements"
      ],
      correctAnswer: 1,
      explanation: "To carry passengers, a pilot must have completed 3 takeoffs and landings in the same category and class of aircraft in the preceding 30 days",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "CAR 61.385",
        section: "1",
        description: "Recent experience requirements"
      }]
    },
    {
      id: "ppl-al-003",
      type: "multiple-choice",
      text: "What is the minimum visibility required for Special VFR operations in controlled airspace?",
      options: [
        "1500 meters",
        "2000 meters",
        "3000 meters",
        "5000 meters"
      ],
      correctAnswer: 0,
      explanation: "The minimum visibility for Special VFR operations in controlled airspace is 1500 meters",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.2",
        section: "3.1",
        description: "Special VFR requirements"
      }]
    },
    {
      id: "ppl-al-004",
      type: "multiple-choice",
      text: "What are the requirements for operating an aircraft at night under PPL privileges?",
      options: [
        "No additional requirements needed",
        "Must hold a night VFR rating",
        "Must be instrument rated",
        "Night flying is not permitted under PPL"
      ],
      correctAnswer: 1,
      explanation: "To operate at night under PPL privileges, the pilot must hold a night VFR rating",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "CAR 61.395",
        section: "1",
        description: "Night VFR requirements"
      }]
    },
    {
      id: "ppl-al-005",
      type: "multiple-choice",
      text: "What is the validity period of a Class 2 medical certificate for PPL operations?",
      options: [
        "12 months",
        "24 months",
        "36 months",
        "48 months"
      ],
      correctAnswer: 1,
      explanation: "A Class 2 medical certificate is valid for 24 months for PPL operations if under 40 years of age",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "easy",
      references: [{
        document: "CASR 67.205",
        section: "1",
        description: "Class 2 medical certificate validity"
      }]
    }
  ]
};