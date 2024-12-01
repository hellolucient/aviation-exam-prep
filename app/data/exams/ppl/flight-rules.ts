import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const pplFlightRulesExam: Exam = {
  id: "ppl-fr-001",
  level: ExamLevel.PPL,
  subjectArea: SubjectArea.FLIGHT_RULES,
  title: "PPL Flight Rules Knowledge Test",
  description: "Test your knowledge of flight rules for PPL",
  timeLimit: 40,
  passingScore: 75,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "ppl-fr-001",
      type: "multiple-choice",
      text: "What are the requirements for VFR flight in Class C airspace?",
      options: [
        "ATC clearance and Mode C transponder",
        "Flight plan only",
        "Radio only",
        "No specific requirements"
      ],
      correctAnswer: 0,
      explanation: "VFR flight in Class C airspace requires both ATC clearance and a Mode C transponder",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.4",
        section: "2",
        description: "Class C airspace requirements"
      }]
    },
    {
      id: "ppl-fr-002",
      type: "multiple-choice",
      text: "What is the minimum flight visibility required for VFR flight above 10,000ft AMSL?",
      options: [
        "5000 meters",
        "8000 meters",
        "10000 meters",
        "No minimum requirement"
      ],
      correctAnswer: 1,
      explanation: "Above 10,000ft AMSL, the minimum flight visibility for VFR is 8000 meters",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.2",
        section: "3.1",
        description: "VFR visibility requirements"
      }]
    },
    {
      id: "ppl-fr-003",
      type: "multiple-choice",
      text: "What are the requirements for alternate aerodrome planning under VFR?",
      options: [
        "Always required",
        "Never required",
        "Required if destination weather is below minima",
        "Only required for night flights"
      ],
      correctAnswer: 2,
      explanation: "An alternate aerodrome is required when forecast destination weather is below VFR minima",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.1",
        section: "4.1",
        description: "Alternate requirements"
      }]
    },
    {
      id: "ppl-fr-004",
      type: "multiple-choice",
      text: "What are the VFR cruising levels when tracking between 180° and 359°?",
      options: [
        "Odd thousands plus 500ft",
        "Even thousands plus 500ft",
        "Any altitude",
        "Only below 5000ft"
      ],
      correctAnswer: 1,
      explanation: "When tracking between 180° and 359°, VFR aircraft must fly at even thousands plus 500ft (e.g., 4500, 6500)",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.7",
        section: "3.2",
        description: "VFR cruising levels"
      }]
    },
    {
      id: "ppl-fr-005",
      type: "multiple-choice",
      text: "What are the requirements for VFR flight at night?",
      options: [
        "No additional requirements",
        "Night VFR rating and equipped aircraft",
        "IFR rating only",
        "Not permitted"
      ],
      correctAnswer: 1,
      explanation: "VFR flight at night requires both a night VFR rating and an appropriately equipped aircraft",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "CAR 1.2",
        section: "5.1",
        description: "Night VFR requirements"
      }]
    }
  ]
}; 