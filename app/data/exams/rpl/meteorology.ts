import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const rplMeteorologylExam: Exam = {
  id: "rpl-met-001",
  level: ExamLevel.RPL,
  subjectArea: SubjectArea.METEOROLOGY,
  title: "RPL Meteorology Knowledge Test",
  description: "Test your knowledge of weather and meteorological conditions for RPL",
  timeLimit: 40,
  passingScore: 70,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "rpl-met-001",
      type: "multiple-choice",
      text: "What weather conditions are associated with a cold front?",
      options: [
        "Clear skies and light winds",
        "Thunderstorms and heavy rain",
        "Fog and low visibility",
        "High pressure and stable conditions"
      ],
      correctAnswer: 1,
      explanation: "Cold fronts typically bring unstable conditions including thunderstorms, heavy rain, and gusty winds",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "4.1",
        description: "Weather fronts"
      }]
    },
    {
      id: "rpl-met-002",
      type: "multiple-choice",
      text: "What causes wind?",
      options: [
        "Temperature differences creating pressure gradients",
        "Earth's rotation only",
        "Surface friction only",
        "Cloud formation"
      ],
      correctAnswer: 0,
      explanation: "Wind is caused by differences in temperature creating pressure gradients, with air flowing from high to low pressure",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "2.1",
        description: "Wind formation"
      }]
    },
    {
      id: "rpl-met-003",
      type: "multiple-choice",
      text: "What conditions are required for the formation of fog?",
      options: [
        "High winds and rain",
        "High temperature and low humidity",
        "High humidity and temperature/dew point close together",
        "Low humidity and clear skies"
      ],
      correctAnswer: 2,
      explanation: "Fog forms when the air temperature and dew point are close together with high humidity",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "5.2",
        description: "Fog formation"
      }]
    },
    {
      id: "rpl-met-004",
      type: "multiple-choice",
      text: "What is an indication of approaching thunderstorm activity?",
      options: [
        "Lowering cloud base and increasing winds",
        "Rising pressure and improving visibility",
        "Decreasing temperature and wind",
        "Clear skies and stable conditions"
      ],
      correctAnswer: 0,
      explanation: "Approaching thunderstorms are typically indicated by lowering cloud bases and increasing winds",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "6.3",
        description: "Thunderstorm recognition"
      }]
    },
    {
      id: "rpl-met-005",
      type: "multiple-choice",
      text: "What type of cloud is associated with turbulence?",
      options: [
        "Cirrus",
        "Cumulonimbus",
        "Stratus",
        "Nimbostratus"
      ],
      correctAnswer: 1,
      explanation: "Cumulonimbus clouds are associated with severe turbulence due to strong vertical air movements",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "easy",
      references: [{
        document: "Basic Meteorology",
        section: "3.4",
        description: "Cloud types and associated weather"
      }]
    },
    {
      id: "rpl-met-006",
      type: "multiple-choice",
      text: "Interpret the following TAF for YSSY. What wind conditions are forecast for the first period?",
      image: {
        src: "/images/questions/diagrams/taf.svg",
        alt: "TAF for Sydney Airport",
        caption: "Terminal Aerodrome Forecast (TAF) for YSSY"
      },
      options: [
        "Variable at 5 knots",
        "160 degrees at 15 knots",
        "160 degrees at 15 knots, gusting 25 knots",
        "160 degrees at 25 knots"
      ],
      correctAnswer: 2,
      explanation: "The TAF shows wind from 160° at 15 knots with gusts to 25 knots (16015G25KT)",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "AIP GEN 3.5",
        section: "5.1",
        description: "Meteorological codes - TAF"
      }]
    },
    {
      id: "rpl-met-007",
      type: "multiple-choice",
      text: "What type of cloud is shown in this diagram and what is its typical height range?",
      image: {
        src: "/images/questions/diagrams/cloud-types.svg",
        alt: "Vertical development of a cloud",
        caption: "Cloud Formation Diagram"
      },
      options: [
        "Stratus, 0-3,000ft",
        "Cumulus, 0-6,000ft",
        "Cumulonimbus, 0-35,000ft",
        "Cirrus, 20,000-35,000ft"
      ],
      correctAnswer: 2,
      explanation: "The diagram shows a Cumulonimbus cloud, characterized by significant vertical development from surface level up to around 35,000ft, with the distinctive anvil top",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "Cloud Types",
        description: "Cumulonimbus characteristics"
      }]
    },
    {
      id: "rpl-met-008",
      type: "multiple-choice",
      text: "In this cold front diagram, what would be the expected wind direction change as the front passes?",
      image: {
        src: "/images/questions/diagrams/cold-front.svg",
        alt: "Cold front diagram showing temperature differences",
        caption: "Cold Front Movement and Air Masses"
      },
      options: [
        "No wind direction change",
        "Gradual backing of wind",
        "Sudden veering of wind",
        "Wind remains constant"
      ],
      correctAnswer: 2,
      explanation: "As a cold front passes, there is typically a sudden veering (clockwise shift) of wind direction",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "Frontal Systems",
        description: "Cold front characteristics"
      }]
    },
    {
      id: "rpl-met-009",
      type: "multiple-choice",
      text: "In this frontal system diagram, what type of front is shown in purple?",
      image: {
        src: "/images/questions/diagrams/frontal-system.svg",
        alt: "Weather chart showing different frontal systems",
        caption: "Frontal System Types"
      },
      options: [
        "Warm front",
        "Cold front",
        "Occluded front",
        "Stationary front"
      ],
      correctAnswer: 2,
      explanation: "The purple line with combined warm and cold front symbols represents an occluded front, where a cold front has overtaken a warm front",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "Frontal Systems",
        description: "Frontal system identification"
      }]
    }
  ]
}; 