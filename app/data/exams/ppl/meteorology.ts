import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const pplMeteorologylExam: Exam = {
  id: "ppl-met-001",
  level: ExamLevel.PPL,
  subjectArea: SubjectArea.METEOROLOGY,
  title: "PPL Meteorology Knowledge Test",
  description: "Test your knowledge of weather and meteorological conditions for PPL",
  timeLimit: 40,
  passingScore: 75,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "ppl-met-001",
      type: "multiple-choice",
      text: "What conditions are required for the formation of radiation fog?",
      options: [
        "Strong winds and rain",
        "Clear skies, light winds, and cooling ground",
        "Warm front approaching",
        "High altitude clouds"
      ],
      correctAnswer: 1,
      explanation: "Radiation fog forms on clear nights with light winds when the ground cools by radiation, cooling the air above it to saturation",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Meteorology",
        section: "4.2",
        description: "Types of fog"
      }]
    },
    {
      id: "ppl-met-002",
      type: "multiple-choice",
      text: "What is a characteristic of an occluded front?",
      options: [
        "Warm air mass only",
        "Cold air mass only",
        "Merging of warm and cold fronts",
        "Stationary front"
      ],
      correctAnswer: 2,
      explanation: "An occluded front occurs when a cold front overtakes a warm front, causing them to merge",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Meteorology",
        section: "5.3",
        description: "Frontal systems"
      }]
    },
    {
      id: "ppl-met-003",
      type: "multiple-choice",
      text: "What causes wind shear?",
      options: [
        "Uniform air movement",
        "Sudden changes in wind velocity or direction",
        "Stable air masses",
        "High pressure systems"
      ],
      correctAnswer: 1,
      explanation: "Wind shear is caused by sudden changes in wind velocity or direction, often associated with temperature inversions, frontal activity, or terrain",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Meteorology",
        section: "6.1",
        description: "Wind shear"
      }]
    },
    {
      id: "ppl-met-004",
      type: "multiple-choice",
      text: "What indicates the presence of severe turbulence?",
      options: [
        "Lenticular clouds",
        "Cumulonimbus clouds",
        "Stratus clouds",
        "Cirrus clouds"
      ],
      correctAnswer: 1,
      explanation: "Cumulonimbus clouds indicate severe turbulence due to strong vertical air movements and potential thunderstorm activity",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Meteorology",
        section: "7.2",
        description: "Cloud types and turbulence"
      }]
    },
    {
      id: "ppl-met-005",
      type: "multiple-choice",
      text: "What is the primary cause of mountain waves?",
      options: [
        "Strong winds perpendicular to mountain ranges",
        "Light winds parallel to mountain ranges",
        "Calm conditions over mountains",
        "Sea breezes near mountains"
      ],
      correctAnswer: 0,
      explanation: "Mountain waves are primarily caused by strong winds blowing perpendicular to mountain ranges, creating wave patterns on the lee side",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Meteorology",
        section: "8.1",
        description: "Mountain waves"
      }]
    }
  ]
}; 