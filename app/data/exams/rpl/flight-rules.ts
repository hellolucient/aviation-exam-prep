import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const rplFlightRulesExam: Exam = {
  id: "rpl-fr-001",
  level: ExamLevel.RPL,
  subjectArea: SubjectArea.FLIGHT_RULES,
  title: "RPL Flight Rules Knowledge Test",
  description: "Practice questions for RPL Flight Rules",
  timeLimit: 40,
  passingScore: 70,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "rpl-fr-001",
      type: "multiple-choice",
      text: "What are the minimum Visual Meteorological Conditions (VMC) for VFR flight below 3000ft AMSL?",
      options: [
        "5000m visibility, clear of cloud",
        "5000m visibility, 1000ft vertical and 1500m horizontal from cloud",
        "8000m visibility, clear of cloud",
        "8000m visibility, 1000ft vertical and 1500m horizontal from cloud"
      ],
      correctAnswer: 0,
      explanation: "Below 3000ft AMSL in Class G airspace, the minimum VMC is 5000m visibility and clear of cloud",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.2",
        section: "2.1",
        description: "Visual Meteorological Conditions"
      }]
    },
    {
      id: "rpl-fr-002",
      type: "multiple-choice",
      text: "What is the maximum indicated airspeed (IAS) below 10,000ft?",
      options: [
        "200 knots",
        "250 knots",
        "240 knots",
        "No speed limit"
      ],
      correctAnswer: 1,
      explanation: "The maximum indicated airspeed below 10,000ft is 250 knots IAS",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "easy",
      references: [{
        document: "AIP ENR 1.1",
        section: "3.1",
        description: "Speed limitations"
      }]
    },
    {
      id: "rpl-fr-003",
      type: "multiple-choice",
      text: "When must position reports be made in Class G airspace?",
      options: [
        "Only when requested by ATC",
        "On departure, arrival, and when changing levels",
        "Every 30 minutes",
        "Only when entering controlled airspace"
      ],
      correctAnswer: 1,
      explanation: "In Class G airspace, mandatory position reports must be made on departure, arrival, and when changing levels",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.1",
        section: "4.2",
        description: "Position reporting requirements"
      }]
    },
    {
      id: "rpl-fr-004",
      type: "multiple-choice",
      text: "What is the minimum flight visibility required for VFR flight above 3000ft AMSL?",
      options: [
        "5000 meters",
        "8000 meters",
        "10000 meters",
        "No minimum requirement"
      ],
      correctAnswer: 1,
      explanation: "Above 3000ft AMSL, the minimum flight visibility for VFR is 8000 meters",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.2",
        section: "2.2",
        description: "VFR visibility requirements"
      }]
    },
    {
      id: "rpl-fr-005",
      type: "multiple-choice",
      text: "What are the VFR cruising levels when tracking between 000° and 179°?",
      options: [
        "Odd thousands plus 500ft",
        "Even thousands plus 500ft",
        "Any altitude",
        "Only below 5000ft"
      ],
      correctAnswer: 0,
      explanation: "When tracking between 000° and 179°, VFR aircraft must fly at odd thousands plus 500ft (e.g., 3500, 5500)",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.7",
        section: "3.1",
        description: "VFR cruising levels"
      }]
    }
  ]
}; 