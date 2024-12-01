import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const rplNavigationExam: Exam = {
  id: "rpl-nav-001",
  level: ExamLevel.RPL,
  subjectArea: SubjectArea.NAVIGATION,
  title: "RPL Navigation Knowledge Test",
  description: "Test your knowledge of navigation principles for RPL",
  timeLimit: 40,
  passingScore: 70,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "rpl-nav-001",
      type: "multiple-choice",
      text: "What is the difference between True North and Magnetic North?",
      options: [
        "Magnetic variation",
        "Compass deviation",
        "Track error",
        "Wind correction angle"
      ],
      correctAnswer: 0,
      explanation: "Magnetic variation is the angular difference between True North and Magnetic North at a given location",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Basic Navigation",
        section: "2.1",
        description: "Magnetic variation"
      }]
    },
    {
      id: "rpl-nav-002",
      type: "multiple-choice",
      text: "How do you calculate Ground Speed?",
      options: [
        "True Airspeed plus wind component",
        "True Airspeed minus wind component",
        "Indicated Airspeed plus wind component",
        "Indicated Airspeed minus wind component"
      ],
      correctAnswer: 0,
      explanation: "Ground Speed is calculated by adding (tailwind) or subtracting (headwind) the wind component to/from True Airspeed",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Basic Navigation",
        section: "3.1",
        description: "Ground Speed calculation"
      }]
    },
    {
      id: "rpl-nav-003",
      type: "multiple-choice",
      text: "What is the purpose of a track line on an aeronautical chart?",
      options: [
        "To show controlled airspace boundaries",
        "To indicate the planned path of the aircraft over the ground",
        "To show magnetic variation",
        "To indicate wind direction"
      ],
      correctAnswer: 1,
      explanation: "A track line on an aeronautical chart represents the planned path of the aircraft over the ground",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "easy",
      references: [{
        document: "Basic Navigation",
        section: "4.2",
        description: "Chart reading"
      }]
    },
    {
      id: "rpl-nav-004",
      type: "multiple-choice",
      text: "What does the term 'heading' refer to?",
      options: [
        "The direction the aircraft is moving over the ground",
        "The direction the aircraft's nose is pointing",
        "The planned route of flight",
        "The wind direction"
      ],
      correctAnswer: 1,
      explanation: "Heading is the direction the aircraft's nose is pointing relative to magnetic or true north",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "easy",
      references: [{
        document: "Basic Navigation",
        section: "2.3",
        description: "Basic navigation terms"
      }]
    },
    {
      id: "rpl-nav-005",
      type: "multiple-choice",
      text: "What is drift angle?",
      options: [
        "The angle between True and Magnetic North",
        "The angle between heading and track",
        "The angle between True Airspeed and Ground Speed",
        "The angle between the runway and wind direction"
      ],
      correctAnswer: 1,
      explanation: "Drift angle is the angle between the aircraft's heading and its track over the ground, caused by wind",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Basic Navigation",
        section: "3.2",
        description: "Wind effect on navigation"
      }]
    },
    {
      id: "rpl-nav-006",
      type: "multiple-choice",
      text: "What type of airspace is shown in the highlighted area of this diagram?",
      image: {
        src: "/images/questions/diagrams/airspace-classes.svg",
        alt: "Diagram showing different airspace classes",
        caption: "Airspace Classification Diagram"
      },
      options: [
        "Class A",
        "Class C",
        "Class D",
        "Class G"
      ],
      correctAnswer: 2,
      explanation: "The highlighted area shows Class D airspace, indicated by the blue dashed line boundary and associated altitude limits",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.4",
        section: "2",
        description: "Airspace classification"
      }]
    },
    {
      id: "rpl-nav-008",
      type: "multiple-choice",
      text: "At which position in the circuit pattern should the turn onto base leg normally begin?",
      image: {
        src: "/images/questions/diagrams/circuit-pattern.svg",
        alt: "Standard circuit pattern with labeled positions",
        caption: "Standard Aerodrome Circuit Pattern"
      },
      options: [
        "When the runway threshold is 45° behind the wing",
        "When abeam the runway threshold",
        "When the runway numbers are visible",
        "At a fixed distance from the runway"
      ],
      correctAnswer: 0,
      explanation: "The turn onto base should normally begin when the runway threshold is approximately 45° behind the wing position",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Basic Navigation",
        section: "Circuit Procedures",
        description: "Circuit pattern positions"
      }]
    }
  ]
}; 