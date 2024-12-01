import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const pplNavigationExam: Exam = {
  id: "ppl-nav-001",
  level: ExamLevel.PPL,
  subjectArea: SubjectArea.NAVIGATION,
  title: "PPL Navigation Knowledge Test",
  description: "Test your knowledge of navigation principles for PPL",
  timeLimit: 40,
  passingScore: 75,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "ppl-nav-001",
      type: "multiple-choice",
      text: "What is the purpose of isogonals on an aeronautical chart?",
      options: [
        "To show lines of equal pressure",
        "To show lines of equal magnetic variation",
        "To show lines of equal temperature",
        "To show lines of equal elevation"
      ],
      correctAnswer: 1,
      explanation: "Isogonals are lines on charts connecting points of equal magnetic variation",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Navigation",
        section: "2.3",
        description: "Chart interpretation"
      }]
    },
    {
      id: "ppl-nav-002",
      type: "multiple-choice",
      text: "How is True Airspeed (TAS) affected by an increase in altitude with constant IAS?",
      options: [
        "TAS decreases",
        "TAS increases",
        "TAS remains the same",
        "TAS fluctuates randomly"
      ],
      correctAnswer: 1,
      explanation: "True Airspeed increases with altitude when Indicated Airspeed remains constant, due to decreased air density",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Navigation",
        section: "3.2",
        description: "Airspeed calculations"
      }]
    },
    {
      id: "ppl-nav-003",
      type: "multiple-choice",
      text: "What is the 1:60 rule used for?",
      options: [
        "Fuel calculations",
        "Track error corrections",
        "Time calculations",
        "Distance measurements"
      ],
      correctAnswer: 1,
      explanation: "The 1:60 rule is used to calculate track corrections, stating that 1 degree of track error equals 1 NM off track after 60 NM",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Navigation",
        section: "4.1",
        description: "Track corrections"
      }]
    },
    {
      id: "ppl-nav-004",
      type: "multiple-choice",
      text: "What information does a wind triangle provide?",
      options: [
        "Only ground speed",
        "Only heading",
        "Ground speed, heading, and track",
        "Only track"
      ],
      correctAnswer: 2,
      explanation: "A wind triangle is used to determine ground speed, heading, and track when considering wind effects",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Navigation",
        section: "5.2",
        description: "Wind triangle calculations"
      }]
    },
    {
      id: "ppl-nav-005",
      type: "multiple-choice",
      text: "What is the purpose of a time of arrival tolerance?",
      options: [
        "To meet ATC requirements",
        "To comply with flight plan timing",
        "To identify navigation errors",
        "To calculate fuel requirements"
      ],
      correctAnswer: 2,
      explanation: "Time of arrival tolerance is used to identify potential navigation errors by comparing actual versus planned arrival times",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Navigation",
        section: "6.1",
        description: "Navigation accuracy"
      }]
    }
  ]
}; 