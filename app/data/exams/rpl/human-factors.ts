import { ExamLevel, SubjectArea, type Exam } from '../../examTypes';

export const rplHumanFactorsExam: Exam = {
  id: "rpl-hf-001",
  level: ExamLevel.RPL,
  subjectArea: SubjectArea.HUMAN_FACTORS,
  title: "RPL Human Factors Knowledge Test",
  description: "Test your knowledge of human factors in aviation for RPL",
  timeLimit: 40,
  passingScore: 70,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  questions: [
    {
      id: "rpl-hf-001",
      type: "multiple-choice",
      text: "What is the 'I'M SAFE' checklist used for?",
      options: [
        "Aircraft pre-flight inspection",
        "Personal fitness for flight assessment",
        "Weather evaluation",
        "Navigation planning"
      ],
      correctAnswer: 1,
      explanation: "The I'M SAFE checklist is a personal assessment tool for pilots to evaluate their fitness for flight (Illness, Medication, Stress, Alcohol, Fatigue, Emotion)",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "easy",
      references: [{
        document: "Human Factors",
        section: "1.2",
        description: "Personal fitness for flight"
      }]
    },
    {
      id: "rpl-hf-002",
      type: "multiple-choice",
      text: "What is spatial disorientation?",
      options: [
        "Fear of flying",
        "Loss of situational awareness",
        "Confusion about aircraft's attitude and motion",
        "Inability to read instruments"
      ],
      correctAnswer: 2,
      explanation: "Spatial disorientation is confusion about the aircraft's attitude and motion relative to the earth, often occurring in poor visibility conditions",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "3.1",
        description: "Spatial disorientation"
      }]
    },
    {
      id: "rpl-hf-003",
      type: "multiple-choice",
      text: "What is the primary cause of hypoxia in aviation?",
      options: [
        "Dehydration",
        "Lack of oxygen at altitude",
        "Carbon monoxide poisoning",
        "Stress and fatigue"
      ],
      correctAnswer: 1,
      explanation: "Hypoxia in aviation is primarily caused by reduced oxygen partial pressure at altitude, leading to insufficient oxygen reaching the tissues",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "4.2",
        description: "Hypoxia"
      }]
    },
    {
      id: "rpl-hf-004",
      type: "multiple-choice",
      text: "What is the most effective way to scan for other aircraft?",
      options: [
        "Continuous scanning in a circular motion",
        "Focusing on one area at a time",
        "Systematic scanning in sectors with regular pauses",
        "Random scanning of the sky"
      ],
      correctAnswer: 2,
      explanation: "The most effective scanning technique is to systematically scan in sectors, with regular pauses to allow the eyes to focus and detect movement",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "2.3",
        description: "Visual scanning techniques"
      }]
    },
    {
      id: "rpl-hf-005",
      type: "multiple-choice",
      text: "What is the hazardous attitude of 'invulnerability'?",
      options: [
        "Following rules blindly",
        "Believing accidents happen to others, not you",
        "Making impulsive decisions",
        "Giving up when faced with challenges"
      ],
      correctAnswer: 1,
      explanation: "The hazardous attitude of invulnerability is the belief that accidents happen to others but not to you, leading to unnecessary risk-taking",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "5.1",
        description: "Hazardous attitudes"
      }]
    },
    {
      id: "rpl-hf-006",
      type: "multiple-choice",
      text: "What visual illusion is illustrated in this diagram?",
      image: {
        src: "/images/questions/diagrams/illusions.svg",
        alt: "Aircraft approach to sloping runway",
        caption: "Runway Slope Illusion"
      },
      options: [
        "Black hole approach",
        "Upsloping runway illusion",
        "False horizon",
        "Autokinesis"
      ],
      correctAnswer: 1,
      explanation: "The diagram shows an upsloping runway illusion, where the pilot tends to fly a lower approach than normal because the upsloping runway appears more level than it actually is",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "Visual Illusions",
        description: "Runway slope illusions"
      }]
    },
    {
      id: "rpl-hf-007",
      type: "multiple-choice",
      text: "In the DECIDE model shown, what is the correct sequence after 'Detect'?",
      image: {
        src: "/images/questions/diagrams/decision-model.svg",
        alt: "DECIDE aeronautical decision-making model",
        caption: "DECIDE Model Steps"
      },
      options: [
        "Estimate, Choose, Identify, Do, Evaluate",
        "Evaluate, Choose, Identify, Do, Estimate",
        "Estimate, Identify, Choose, Do, Evaluate",
        "Evaluate, Identify, Choose, Do, Estimate"
      ],
      correctAnswer: 0,
      explanation: "The DECIDE model follows: Detect, Estimate, Choose, Identify, Do, Evaluate - in that specific order",
      subjectArea: SubjectArea.HUMAN_FACTORS,
      difficulty: "medium",
      references: [{
        document: "Human Factors",
        section: "Decision Making",
        description: "DECIDE model application"
      }]
    }
  ]
}; 