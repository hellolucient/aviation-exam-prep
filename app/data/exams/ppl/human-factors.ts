import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const pplHumanFactorsExam: Exam = {
  id: "ppl-hf-001",
  level: ExamLevel.PPL,
  subjectArea: SubjectArea.HUMAN_FACTORS,
  title: "PPL Human Factors Knowledge Test",
  description: "Test your knowledge of human factors in aviation for PPL",
  timeLimit: 40,
  passingScore: 75,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "ppl-hf-001",
      type: "multiple-choice",
      text: "What is the primary cause of hypoxic hypoxia?",
      options: [
        "Carbon monoxide poisoning",
        "Reduced oxygen pressure at altitude",
        "Blood disorders",
        "Dehydration"
      ],
      correctAnswer: 1,
      explanation: "Hypoxic hypoxia is primarily caused by reduced oxygen pressure at altitude, leading to insufficient oxygen reaching the tissues",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "3.2",
        description: "Types of hypoxia"
      }]
    },
    {
      id: "ppl-hf-002",
      type: "multiple-choice",
      text: "What is the most effective way to combat fatigue during flight?",
      options: [
        "Drink coffee",
        "Proper pre-flight rest",
        "Open the air vents",
        "Increase cabin temperature"
      ],
      correctAnswer: 1,
      explanation: "The most effective way to combat fatigue is proper pre-flight rest; in-flight countermeasures are temporary and less effective",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "4.1",
        description: "Fatigue management"
      }]
    },
    {
      id: "ppl-hf-003",
      type: "multiple-choice",
      text: "What is the 'Swiss Cheese Model' used to explain?",
      options: [
        "Weather patterns",
        "Navigation techniques",
        "Accident causation",
        "Aircraft systems"
      ],
      correctAnswer: 2,
      explanation: "The Swiss Cheese Model explains how multiple system defenses can be penetrated when holes in different layers line up, leading to accidents",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "5.3",
        description: "Accident causation"
      }]
    },
    {
      id: "ppl-hf-004",
      type: "multiple-choice",
      text: "What is meant by 'situation awareness'?",
      options: [
        "Knowledge of weather only",
        "Understanding of current and future aircraft state",
        "Radio communication skills",
        "Aircraft maintenance knowledge"
      ],
      correctAnswer: 1,
      explanation: "Situation awareness is the understanding of the current aircraft state and environment, and the ability to project future states",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "6.2",
        description: "Situation awareness"
      }]
    },
    {
      id: "ppl-hf-005",
      type: "multiple-choice",
      text: "What is the primary purpose of CRM (Crew Resource Management)?",
      options: [
        "Aircraft maintenance",
        "Fuel management",
        "Effective use of all available resources",
        "Navigation planning"
      ],
      correctAnswer: 2,
      explanation: "CRM focuses on the effective use of all available resources (human, hardware, information) to ensure safe and efficient flight operations",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "7.1",
        description: "Crew Resource Management"
      }]
    }
  ]
}; 