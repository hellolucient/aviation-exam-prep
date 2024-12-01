import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';
import { type MultipleChoiceQuestion } from '../../questionTypes';

export const rplAirLawExam: Exam = {
  id: "rpl-al-001",
  level: ExamLevel.RPL,
  subjectArea: SubjectArea.AIR_LAW,
  title: "RPL Air Law Knowledge Test",
  description: "Test your knowledge of aviation regulations and air law requirements for RPL",
  timeLimit: 40,
  passingScore: 70,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "rpl-al-001",
      type: "multiple-choice",
      text: "What is the minimum height allowed over a populated area?",
      options: [
        "500 feet AGL",
        "1000 feet AGL",
        "1500 feet AGL",
        "2000 feet AGL"
      ],
      correctAnswer: 1,
      explanation: "Under CAR 157, the minimum height over populated areas is 1000 feet AGL (Above Ground Level)",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "CAR 157",
        section: "157.1",
        description: "Minimum height requirements over populated areas"
      }]
    },
    {
      id: "rpl-al-002",
      type: "multiple-choice",
      text: "What is the minimum age requirement for obtaining an RPL?",
      options: [
        "15 years",
        "16 years",
        "17 years",
        "18 years"
      ],
      correctAnswer: 1,
      explanation: "The minimum age for obtaining a Recreational Pilot Licence is 16 years",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "easy",
      references: [{
        document: "CAR 61.465",
        section: "1",
        description: "RPL eligibility requirements"
      }]
    },
    {
      id: "rpl-al-003",
      type: "multiple-choice",
      text: "What medical certification is required for an RPL holder?",
      options: [
        "Class 1 Medical Certificate",
        "Class 2 Medical Certificate",
        "Recreational Aviation Medical Practitioner's Certificate (RAMPC)",
        "No medical certificate required"
      ],
      correctAnswer: 2,
      explanation: "RPL holders must hold at least a Recreational Aviation Medical Practitioner's Certificate (RAMPC)",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "CAR 61.475",
        section: "1",
        description: "Medical requirements"
      }]
    },
    {
      id: "rpl-al-004",
      type: "multiple-choice",
      text: "What are the passenger carrying restrictions for RPL holders?",
      options: [
        "No passengers allowed",
        "Only one passenger allowed",
        "Up to three passengers allowed",
        "No restriction on number of passengers"
      ],
      correctAnswer: 1,
      explanation: "RPL holders are restricted to carrying only one passenger",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "CAR 61.475",
        section: "2",
        description: "RPL privileges and limitations"
      }]
    },
    {
      id: "rpl-al-005",
      type: "multiple-choice",
      text: "What type of operations are RPL holders NOT permitted to conduct?",
      options: [
        "Private operations",
        "Training flights",
        "Commercial operations",
        "Solo flights"
      ],
      correctAnswer: 2,
      explanation: "RPL holders are not permitted to conduct any commercial operations",
      subjectArea: SubjectArea.AIR_LAW,
      difficulty: "medium",
      references: [{
        document: "CAR 61.475",
        section: "3",
        description: "RPL limitations"
      }]
    }
  ]
}; 