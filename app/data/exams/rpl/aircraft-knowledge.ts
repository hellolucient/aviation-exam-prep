import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const rplAircraftKnowledgeExam: Exam = {
  id: "rpl-ak-001",
  level: ExamLevel.RPL,
  subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
  title: "RPL Aircraft Knowledge Test",
  description: "Test your knowledge of aircraft systems and operations for RPL",
  timeLimit: 40,
  passingScore: 70,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "rpl-ak-001",
      type: "multiple-choice",
      text: "What is the purpose of the magnetos in a piston engine?",
      options: [
        "To provide fuel to the engine",
        "To provide ignition for the spark plugs",
        "To regulate oil pressure",
        "To control engine temperature"
      ],
      correctAnswer: 1,
      explanation: "Magnetos are used to provide electrical current for the spark plugs, igniting the fuel/air mixture in the cylinders",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Engine Systems",
        description: "Magneto operation"
      }]
    },
    {
      id: "rpl-ak-002",
      type: "multiple-choice",
      text: "What is the purpose of the mixture control?",
      options: [
        "To control engine speed",
        "To adjust fuel/air ratio",
        "To control oil temperature",
        "To regulate cabin pressure"
      ],
      correctAnswer: 1,
      explanation: "The mixture control adjusts the ratio of fuel to air entering the engine cylinders",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Engine Controls",
        description: "Mixture control operation"
      }]
    },
    {
      id: "rpl-ak-003",
      type: "multiple-choice",
      text: "What is the purpose of flaps?",
      options: [
        "To increase lift and drag",
        "To control roll",
        "To reduce lift",
        "To increase airspeed"
      ],
      correctAnswer: 0,
      explanation: "Flaps are used to increase both lift and drag, allowing for slower landing speeds and steeper approach angles",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "easy",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Flight Controls",
        description: "Flap operation and effects"
      }]
    },
    {
      id: "rpl-ak-004",
      type: "multiple-choice",
      text: "What color is the fuel pressure gauge marking for normal operation?",
      options: [
        "Red",
        "Yellow",
        "Green",
        "White"
      ],
      correctAnswer: 2,
      explanation: "The green arc on the fuel pressure gauge indicates the normal operating range",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "easy",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Instruments",
        description: "Instrument markings"
      }]
    },
    {
      id: "rpl-ak-005",
      type: "multiple-choice",
      text: "What is the purpose of the elevator trim?",
      options: [
        "To control roll",
        "To reduce control forces in pitch",
        "To increase airspeed",
        "To control yaw"
      ],
      correctAnswer: 1,
      explanation: "Elevator trim is used to reduce control forces in pitch, making it easier to maintain the desired attitude",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Flight Controls",
        description: "Trim systems"
      }]
    },
    {
      id: "rpl-ak-006",
      type: "multiple-choice",
      text: "What is the indicated altitude on this altimeter?",
      image: {
        src: "/images/questions/diagrams/altimeter.svg",
        alt: "Aircraft altimeter showing altitude reading",
        caption: "Standard three-pointer altimeter"
      },
      options: [
        "2,350 feet",
        "2,450 feet",
        "2,550 feet",
        "2,650 feet"
      ],
      correctAnswer: 1,
      explanation: "The long pointer indicates 450 feet, the medium pointer shows 2000 feet, giving a total altitude of 2,450 feet",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Instruments",
        description: "Altimeter reading"
      }]
    },
    {
      id: "rpl-ak-007",
      type: "multiple-choice",
      text: "On this ASI, what does the green arc represent?",
      image: {
        src: "/images/questions/diagrams/asi.svg",
        alt: "Airspeed Indicator showing colored arcs",
        caption: "Standard Airspeed Indicator"
      },
      options: [
        "Never exceed speed range",
        "Caution speed range",
        "Normal operating range",
        "Stall speed range"
      ],
      correctAnswer: 2,
      explanation: "The green arc on an ASI represents the normal operating range, from VS1 (stall speed in clean configuration) to VNO (maximum structural cruising speed)",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Instruments",
        description: "ASI color coding"
      }]
    },
    {
      id: "rpl-ak-008",
      type: "multiple-choice",
      text: "What is the approximate rate of climb/descent indicated on this VSI?",
      image: {
        src: "/images/questions/diagrams/vsi.svg",
        alt: "Vertical Speed Indicator showing climb",
        caption: "Vertical Speed Indicator (VSI)"
      },
      options: [
        "500 feet per minute climb",
        "1000 feet per minute climb",
        "1500 feet per minute climb",
        "2000 feet per minute climb"
      ],
      correctAnswer: 1,
      explanation: "The VSI pointer is indicating approximately 1000 feet per minute climb (halfway between 0 and 2000 on the up scale)",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Knowledge",
        section: "Instruments",
        description: "VSI interpretation"
      }]
    }
  ]
}; 