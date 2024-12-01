import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const pplAircraftKnowledgeExam: Exam = {
  id: "ppl-ak-001",
  level: ExamLevel.PPL,
  subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
  title: "PPL Aircraft Knowledge Test",
  description: "Test your knowledge of aircraft systems and operations for PPL",
  timeLimit: 40,
  passingScore: 75,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "ppl-ak-001",
      type: "multiple-choice",
      text: "What is the purpose of the vacuum system in a light aircraft?",
      options: [
        "To power the landing gear",
        "To drive gyroscopic instruments",
        "To control cabin pressure",
        "To operate the flaps"
      ],
      correctAnswer: 1,
      explanation: "The vacuum system in light aircraft typically drives gyroscopic instruments such as the attitude indicator and directional gyro",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Aircraft Systems",
        section: "3.1",
        description: "Vacuum system"
      }]
    },
    {
      id: "ppl-ak-002",
      type: "multiple-choice",
      text: "What is the purpose of the static system?",
      options: [
        "To measure total air pressure",
        "To measure static air pressure",
        "To measure engine pressure",
        "To measure fuel pressure"
      ],
      correctAnswer: 1,
      explanation: "The static system measures static (still) air pressure for instruments like the altimeter and vertical speed indicator",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Aircraft Systems",
        section: "4.2",
        description: "Pitot-static system"
      }]
    },
    {
      id: "ppl-ak-003",
      type: "multiple-choice",
      text: "What is the function of the alternator in an aircraft electrical system?",
      options: [
        "To start the engine",
        "To generate electrical power during flight",
        "To store electrical power",
        "To regulate fuel flow"
      ],
      correctAnswer: 1,
      explanation: "The alternator generates electrical power during flight to power aircraft systems and charge the battery",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Aircraft Systems",
        section: "5.1",
        description: "Electrical system"
      }]
    },
    {
      id: "ppl-ak-004",
      type: "multiple-choice",
      text: "What is the purpose of carburettor heat?",
      options: [
        "To improve engine performance",
        "To prevent carburettor icing",
        "To increase fuel efficiency",
        "To reduce engine temperature"
      ],
      correctAnswer: 1,
      explanation: "Carburettor heat is used to prevent or remove ice formation in the carburettor, which can restrict fuel/air flow",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Aircraft Systems",
        section: "6.3",
        description: "Carburettor system"
      }]
    },
    {
      id: "ppl-ak-005",
      type: "multiple-choice",
      text: "What does the red line on an airspeed indicator represent?",
      options: [
        "Best climb speed",
        "Never exceed speed",
        "Stall speed",
        "Normal operating range"
      ],
      correctAnswer: 1,
      explanation: "The red line on an airspeed indicator represents the never exceed speed (VNE), above which structural damage may occur",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Aircraft Systems",
        section: "7.2",
        description: "Airspeed indicator markings"
      }]
    }
  ]
}; 