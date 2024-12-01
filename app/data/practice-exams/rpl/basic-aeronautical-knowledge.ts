import { ExamLevel, SubjectArea, type PracticeExam } from '../../examTypes';

export const rplBAKPracticeExam: PracticeExam = {
  id: "rpl-bak-practice-001",
  level: ExamLevel.RPL,
  subjectArea: SubjectArea.COMPREHENSIVE,
  title: "RPL Basic Aeronautical Knowledge Practice Exam",
  description: "Full RPL BAK practice exam covering all required knowledge areas: Aircraft General Knowledge, Flight Rules and Air Law, Aerodynamics, Navigation, Meteorology, and Operations/Performance",
  timeLimit: 85,
  passingScore: 75,
  version: "1.0.0",
  lastUpdated: "2024-03-19",
  isOfficialFormat: true,
  examInstructions: [
    "Time allowed: 85 minutes",
    "Answer all questions",
    "All questions are worth equal marks",
    "Pass mark is 75%",
    "Questions cover all RPL knowledge areas",
    "Some questions may require calculations"
  ],
  allowedMaterials: [
    "Calculator",
    "Flight computer",
    "AIP Book",
    "Flight Planning Form"
  ],
  questions: [
    // Aircraft General Knowledge (8 questions)
    {
      id: "rpl-bak-001",
      type: "multiple-choice",
      text: "During the magneto check at 2000 RPM, the maximum permissible drop on either magneto is:",
      options: [
        "25 RPM",
        "75 RPM",
        "125 RPM",
        "175 RPM"
      ],
      correctAnswer: 2,
      explanation: "The maximum permissible drop during a magneto check at 2000 RPM is 125 RPM on either magneto",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "POH",
        section: "4-8",
        description: "Engine checks"
      }]
    },
    {
      id: "rpl-bak-002",
      type: "multiple-choice",
      text: "What does this ASI marking indicate?",
      image: {
        src: "/images/questions/diagrams/asi-marking.svg",
        alt: "ASI showing white arc",
        caption: "ASI Marking Diagram"
      },
      options: [
        "Normal operating range",
        "Caution range",
        "Never exceed speed",
        "Flap operating range"
      ],
      correctAnswer: 3,
      explanation: "The white arc on an ASI indicates the flap operating range, from VS0 to VFE",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Systems",
        section: "Instruments",
        description: "ASI markings"
      }]
    },
    {
      id: "rpl-bak-003",
      type: "multiple-choice",
      text: "Using this performance chart, calculate the takeoff distance required with the following conditions: Temperature 30°C, QNH 1010, Runway 10% upslope, grass surface.",
      image: {
        src: "/images/questions/charts/takeoff-performance.svg",
        alt: "Takeoff performance chart",
        caption: "Aircraft Takeoff Performance Chart"
      },
      options: [
        "450 meters",
        "520 meters",
        "580 meters",
        "650 meters"
      ],
      correctAnswer: 2,
      explanation: "Base distance (450m) + Temperature correction (50m) + Slope correction (30m) + Surface correction (50m) = 580m",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "hard",
      references: [{
        document: "POH",
        section: "5-8",
        description: "Takeoff performance"
      }]
    },
    {
      id: "rpl-bak-004",
      type: "multiple-choice",
      text: "What type of cloud formation is shown in this diagram and what weather can be expected?",
      image: {
        src: "/images/questions/diagrams/cb-cloud.svg",
        alt: "Cumulonimbus cloud formation",
        caption: "Cloud Formation Diagram"
      },
      options: [
        "Stratus, light rain",
        "Cumulus, good weather",
        "Cumulonimbus, thunderstorms",
        "Nimbostratus, continuous rain"
      ],
      correctAnswer: 2,
      explanation: "The diagram shows a cumulonimbus cloud with characteristic anvil top, indicating severe weather including thunderstorms",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "Cloud Types",
        description: "Thunderstorm development"
      }]
    },
    // Continue with Aircraft General Knowledge
    {
      id: "rpl-bak-005",
      type: "multiple-choice",
      text: "What attitude does this artificial horizon indicate?",
      image: {
        src: "/images/questions/diagrams/attitude-indicator.svg",
        alt: "Artificial horizon showing aircraft attitude",
        caption: "Artificial Horizon Indication"
      },
      options: [
        "Climbing right turn",
        "Level flight",
        "Descending left turn",
        "Wings level descent"
      ],
      correctAnswer: 1,
      explanation: "The artificial horizon shows the miniature aircraft symbol aligned with the horizon line with wings level, indicating straight and level flight",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Systems",
        section: "Instruments",
        description: "Attitude indicator interpretation"
      }]
    },
    // Start Flight Rules and Air Law section
    {
      id: "rpl-bak-006",
      type: "multiple-choice",
      text: "What is the correct circuit direction when no other traffic or signals are observed?",
      image: {
        src: "/images/questions/diagrams/circuit-pattern.svg",
        alt: "Standard circuit pattern diagram",
        caption: "Aerodrome Circuit Pattern"
      },
      options: [
        "Left hand unless otherwise specified",
        "Right hand unless otherwise specified",
        "Left hand for helicopters, right hand for fixed wing",
        "Depends on wind direction"
      ],
      correctAnswer: 0,
      explanation: "The standard circuit direction is left hand unless right hand circuits are specified for the aerodrome",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "easy",
      references: [{
        document: "AIP ENR 1.1",
        section: "4.3",
        description: "Circuit procedures"
      }]
    },
    {
      id: "rpl-bak-007",
      type: "multiple-choice",
      text: "What is the minimum safe altitude over a populous area?",
      options: [
        "500 feet AGL",
        "1000 feet AGL",
        "1500 feet AGL",
        "2000 feet AGL"
      ],
      correctAnswer: 1,
      explanation: "The minimum height over populous areas is 1000 feet above ground level (AGL)",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "CAR 157",
        section: "157.1",
        description: "Minimum height requirements"
      }]
    },
    // Start Aerodynamics section
    {
      id: "rpl-bak-008",
      type: "multiple-choice",
      text: "What causes an aircraft to stall?",
      options: [
        "Exceeding the critical angle of attack",
        "Flying too slowly",
        "Running out of engine power",
        "Excessive load factor"
      ],
      correctAnswer: 0,
      explanation: "A stall occurs when the wing exceeds its critical angle of attack, regardless of airspeed",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aerodynamics",
        section: "Stalls",
        description: "Stall aerodynamics"
      }]
    },
    {
      id: "rpl-bak-009",
      type: "multiple-choice",
      text: "Calculate the density altitude with the following conditions: Elevation 2000ft, QNH 1013, Temperature 30°C",
      options: [
        "2000 feet",
        "3500 feet",
        "4000 feet",
        "4500 feet"
      ],
      correctAnswer: 2,
      explanation: "Using the temperature correction of +120ft per °C above ISA, and ISA at 2000ft being 11°C: 2000ft + (19°C × 120ft) = 4000ft",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "hard",
      references: [{
        document: "Basic Meteorology",
        section: "Density Altitude",
        description: "Density altitude calculations"
      }]
    },
    // Continue with Navigation
    {
      id: "rpl-bak-010",
      type: "multiple-choice",
      text: "What is the track error if you are 2 NM left of track after flying 60 NM?",
      options: [
        "1 degree",
        "2 degrees",
        "3 degrees",
        "4 degrees"
      ],
      correctAnswer: 1,
      explanation: "Using the 1 in 60 rule: Track Error = (Distance off track × 60) ÷ Distance flown = (2 × 60) ÷ 60 = 2 degrees",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Basic Navigation",
        section: "Track Corrections",
        description: "1 in 60 rule"
      }]
    },
    // Continue with Meteorology
    {
      id: "rpl-bak-011",
      type: "multiple-choice",
      text: "Which cloud type is associated with continuous precipitation?",
      options: [
        "Cumulus",
        "Nimbostratus",
        "Altocumulus",
        "Cirrus"
      ],
      correctAnswer: 1,
      explanation: "Nimbostratus clouds are associated with continuous precipitation and generally poor weather conditions",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "Cloud Types",
        description: "Precipitation characteristics"
      }]
    },
    {
      id: "rpl-bak-012",
      type: "multiple-choice",
      text: "What is the primary cause of wind?",
      options: [
        "Earth's rotation",
        "Pressure differences",
        "Surface friction",
        "Temperature variations"
      ],
      correctAnswer: 1,
      explanation: "Wind is primarily caused by pressure differences in the atmosphere, flowing from high to low pressure",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "Wind",
        description: "Wind formation"
      }]
    },
    // Operations and Performance
    {
      id: "rpl-bak-013",
      type: "multiple-choice",
      text: "What is the primary purpose of flaps?",
      options: [
        "To increase lift only",
        "To increase drag only",
        "To increase both lift and drag",
        "To decrease lift"
      ],
      correctAnswer: 2,
      explanation: "Flaps increase both lift and drag, allowing for slower landing speeds and steeper approach angles",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aerodynamics",
        section: "Flight Controls",
        description: "Flap operation"
      }]
    },
    {
      id: "rpl-bak-014",
      type: "multiple-choice",
      text: "What is the purpose of the rudder during a turn?",
      options: [
        "To initiate the turn",
        "To maintain altitude",
        "To coordinate the turn",
        "To control airspeed"
      ],
      correctAnswer: 2,
      explanation: "The rudder is used to coordinate the turn by preventing adverse yaw and maintaining balanced flight",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aerodynamics",
        section: "Flight Controls",
        description: "Turn coordination"
      }]
    },
    {
      id: "rpl-bak-015",
      type: "multiple-choice",
      text: "Decode the wind information from this METAR:",
      image: {
        src: "/images/questions/diagrams/metar-decode.svg",
        alt: "METAR showing weather information",
        caption: "METAR Weather Report"
      },
      options: [
        "Winds 270° at 15 knots",
        "Winds 270° at 150 knots",
        "Winds 170° at 15 knots",
        "Winds variable at 15 knots"
      ],
      correctAnswer: 0,
      explanation: "27015KT indicates wind from 270 degrees at 15 knots",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "AIP GEN 3.5",
        section: "5.1",
        description: "METAR decode"
      }]
    },
    {
      id: "rpl-bak-016",
      type: "multiple-choice",
      text: "Using the weight and balance chart, is this loading condition within limits: Empty weight 1500 kg at 28% MAC, pilot 75 kg, passenger 82 kg, fuel 80 kg?",
      image: {
        src: "/images/questions/diagrams/weight-balance.svg",
        alt: "Weight and balance envelope",
        caption: "Aircraft Weight and Balance Chart"
      },
      options: [
        "Within limits",
        "Exceeds forward CG limit",
        "Exceeds aft CG limit",
        "Exceeds maximum weight"
      ],
      correctAnswer: 0,
      explanation: "Total weight 1737 kg with CG at 29.2% MAC falls within the envelope",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "hard",
      references: [{
        document: "POH",
        section: "6",
        description: "Weight and balance"
      }]
    },
    {
      id: "rpl-bak-017",
      type: "multiple-choice",
      text: "Using the VFR chart, calculate the minimum safe altitude for this route considering the highest terrain of 1500ft:",
      image: {
        src: "/images/questions/diagrams/vfr-chart.svg",
        alt: "VFR chart showing terrain and track",
        caption: "VFR Navigation Chart"
      },
      options: [
        "1500 feet",
        "2500 feet",
        "3500 feet",
        "4500 feet"
      ],
      correctAnswer: 2,
      explanation: "Minimum safe altitude is highest terrain (1500ft) + 1000ft (over populous areas) + 1000ft safety margin = 3500ft",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.1",
        section: "3.3",
        description: "Minimum safe altitude"
      }]
    },
    {
      id: "rpl-bak-018",
      type: "multiple-choice",
      text: "Using the stall speed chart, what happens to the stall speed as bank angle increases?",
      image: {
        src: "/images/questions/diagrams/stall-speeds.svg",
        alt: "Graph showing stall speeds vs bank angle",
        caption: "Stall Speed vs Bank Angle"
      },
      options: [
        "Decreases linearly",
        "Remains constant",
        "Increases with square root of load factor",
        "Decreases with bank angle"
      ],
      correctAnswer: 2,
      explanation: "Stall speed increases with the square root of the load factor, which increases with bank angle",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aerodynamics",
        section: "Stalls",
        description: "Effect of bank angle"
      }]
    },
    {
      id: "rpl-bak-019",
      type: "multiple-choice",
      text: "What is the maximum time a pilot can fly without a current medical certificate?",
      options: [
        "0 days",
        "14 days",
        "30 days",
        "90 days"
      ],
      correctAnswer: 0,
      explanation: "A pilot must have a current medical certificate at all times to exercise the privileges of their licence",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "easy",
      references: [{
        document: "CAR 67",
        section: "67.235",
        description: "Medical requirements"
      }]
    },
    {
      id: "rpl-bak-020",
      type: "multiple-choice",
      text: "Using this magnetic variation diagram, convert a true heading of 090° to magnetic heading:",
      image: {
        src: "/images/questions/diagrams/magnetic-variation.svg",
        alt: "Magnetic variation diagram showing 10°E",
        caption: "Magnetic Variation Diagram"
      },
      options: [
        "080°M",
        "090°M",
        "100°M",
        "110°M"
      ],
      correctAnswer: 0,
      explanation: "With 10°E variation, subtract variation from true heading: 090°T - 10° = 080°M",
      subjectArea: SubjectArea.NAVIGATION,
      difficulty: "medium",
      references: [{
        document: "Basic Navigation",
        section: "2.1",
        description: "Magnetic variation"
      }]
    },
    {
      id: "rpl-bak-021",
      type: "multiple-choice",
      text: "What wind direction would you expect between these pressure systems?",
      image: {
        src: "/images/questions/diagrams/pressure-systems.svg",
        alt: "High and low pressure systems",
        caption: "Pressure Systems and Wind Flow"
      },
      options: [
        "Clockwise around high, towards the low",
        "Counterclockwise around high, away from low",
        "Direct line high to low",
        "No consistent pattern"
      ],
      correctAnswer: 0,
      explanation: "Wind flows clockwise around high pressure systems in the Southern Hemisphere, and from high to low pressure",
      subjectArea: SubjectArea.METEOROLOGY,
      difficulty: "medium",
      references: [{
        document: "Basic Meteorology",
        section: "Pressure Systems",
        description: "Wind patterns"
      }]
    },
    {
      id: "rpl-bak-022",
      type: "multiple-choice",
      text: "Using the drag curve diagram, at what point is induced drag highest?",
      image: {
        src: "/images/questions/diagrams/drag-curve.svg",
        alt: "Aircraft drag curves",
        caption: "Drag vs Airspeed Curves"
      },
      options: [
        "At high airspeeds",
        "At low airspeeds",
        "At cruise speed",
        "At maximum speed"
      ],
      correctAnswer: 1,
      explanation: "Induced drag is highest at low airspeeds, as shown by the green curve on the diagram",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aerodynamics",
        section: "Drag",
        description: "Types of drag"
      }]
    },
    {
      id: "rpl-bak-023",
      type: "multiple-choice",
      text: "What is the fuel requirement for a VFR flight with an estimated flight time of 2 hours?",
      options: [
        "2 hours fuel",
        "2 hours 15 minutes fuel",
        "2 hours 45 minutes fuel",
        "3 hours fuel"
      ],
      correctAnswer: 2,
      explanation: "VFR fuel requirements are flight time plus 45 minutes fixed reserve: 2:00 + 0:45 = 2:45",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "CAO 20.2",
        section: "2.2",
        description: "Fuel requirements"
      }]
    },
    {
      id: "rpl-bak-024",
      type: "multiple-choice",
      text: "In this pitot-static system diagram, what instruments would be affected by a blocked static port?",
      image: {
        src: "/images/questions/diagrams/pitot-static.svg",
        alt: "Pitot-static system diagram",
        caption: "Aircraft Pitot-Static System"
      },
      options: [
        "ASI only",
        "Altimeter only",
        "ASI and altimeter",
        "Altimeter and VSI"
      ],
      correctAnswer: 3,
      explanation: "A blocked static port affects instruments that rely on static pressure: the altimeter and vertical speed indicator (VSI)",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Systems",
        section: "Instruments",
        description: "Pitot-static system"
      }]
    },
    {
      id: "rpl-bak-025",
      type: "multiple-choice",
      text: "Using the engine system diagram, what would happen if the left magneto failed?",
      image: {
        src: "/images/questions/diagrams/engine-systems.svg",
        alt: "Dual magneto ignition system",
        caption: "Aircraft Magneto System"
      },
      options: [
        "Engine would stop completely",
        "Only left spark plugs would fire",
        "Only right spark plugs would fire",
        "Engine would continue with reduced power"
      ],
      correctAnswer: 3,
      explanation: "With one magneto failed, the engine continues running on the other magneto but with slightly reduced power",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Systems",
        section: "Engine Systems",
        description: "Magneto operation"
      }]
    },
    {
      id: "rpl-bak-026",
      type: "multiple-choice",
      text: "In the fuel system diagram shown, what is the purpose of the fuel selector valve?",
      image: {
        src: "/images/questions/diagrams/fuel-system.svg",
        alt: "Aircraft fuel system",
        caption: "Basic Fuel System Layout"
      },
      options: [
        "To shut off fuel flow completely",
        "To select which tank feeds the engine",
        "To control fuel pressure",
        "To mix fuel and air"
      ],
      correctAnswer: 1,
      explanation: "The fuel selector valve allows the pilot to choose which tank supplies fuel to the engine",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Systems",
        section: "Fuel System",
        description: "Fuel selector operation"
      }]
    },
    {
      id: "rpl-bak-027",
      type: "multiple-choice",
      text: "What is the minimum flight visibility required for VFR flight above 10,000ft AMSL?",
      options: [
        "5000 meters",
        "8000 meters",
        "10000 meters",
        "16000 meters"
      ],
      correctAnswer: 1,
      explanation: "Above 10,000ft AMSL, the minimum flight visibility for VFR operations is 8000 meters",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.2",
        section: "2.1",
        description: "VFR meteorological conditions"
      }]
    },
    {
      id: "rpl-bak-028",
      type: "multiple-choice",
      text: "What is the primary purpose of carburettor heat?",
      options: [
        "To increase engine power",
        "To prevent or remove carburettor icing",
        "To improve fuel economy",
        "To reduce engine temperature"
      ],
      correctAnswer: 1,
      explanation: "Carburettor heat is used to prevent or remove ice formation in the carburettor by providing heated alternate air",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Systems",
        section: "Engine Systems",
        description: "Carburettor heat system"
      }]
    },
    {
      id: "rpl-bak-029",
      type: "multiple-choice",
      text: "When must the landing light be used?",
      options: [
        "Only at night",
        "Only when visibility is poor",
        "For all takeoffs and landings",
        "There is no requirement for RPL operations"
      ],
      correctAnswer: 3,
      explanation: "There is no specific requirement for landing light use in RPL operations, although it is recommended for visibility to other aircraft",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "easy",
      references: [{
        document: "CAR 1988",
        section: "Equipment",
        description: "Aircraft lighting requirements"
      }]
    },
    {
      id: "rpl-bak-030",
      type: "multiple-choice",
      text: "Using the loading graph, calculate the moment arm for this loading condition:",
      image: {
        src: "/images/questions/diagrams/loading-graph.svg",
        alt: "Aircraft loading graph",
        caption: "Weight and Balance Loading Graph"
      },
      options: [
        "1000 mm",
        "1100 mm",
        "1200 mm",
        "1300 mm"
      ],
      correctAnswer: 2,
      explanation: "Total moment (weight × arm) divided by total weight gives 1200mm arm",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "hard",
      references: [{
        document: "POH",
        section: "6",
        description: "Weight and balance calculations"
      }]
    },
    {
      id: "rpl-bak-031",
      type: "multiple-choice",
      text: "What altimeter setting should be used when operating at or above the transition altitude?",
      image: {
        src: "/images/questions/diagrams/altimeter-setting.svg",
        alt: "Altimeter showing pressure setting",
        caption: "Aircraft Altimeter"
      },
      options: [
        "Area QNH",
        "Aerodrome QNH",
        "1013.2 hPa",
        "Local QNH"
      ],
      correctAnswer: 2,
      explanation: "Above the transition altitude, altimeters should be set to the standard pressure setting of 1013.2 hPa",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.7",
        section: "2",
        description: "Altimeter setting procedures"
      }]
    },
    {
      id: "rpl-bak-032",
      type: "multiple-choice",
      text: "When landing behind a larger aircraft, what precautions should be taken regarding wake turbulence?",
      image: {
        src: "/images/questions/diagrams/wake-turbulence.svg",
        alt: "Wake turbulence behind landing aircraft",
        caption: "Wake Turbulence on Landing"
      },
      options: [
        "Land before the larger aircraft's touchdown point",
        "Land beyond the larger aircraft's touchdown point",
        "Land on a parallel runway",
        "Maintain the same approach path"
      ],
      correctAnswer: 1,
      explanation: "Land beyond the larger aircraft's touchdown point to avoid wake turbulence, which descends and moves laterally after generation",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "medium",
      references: [{
        document: "AIP ENR 1.1",
        section: "17.2",
        description: "Wake turbulence procedures"
      }]
    },
    {
      id: "rpl-bak-033",
      type: "multiple-choice",
      text: "What is the primary cause of carburetor icing?",
      options: [
        "High outside air temperature",
        "Fuel vaporization and temperature drop",
        "Low engine RPM",
        "Rich mixture settings"
      ],
      correctAnswer: 1,
      explanation: "Carburetor icing occurs due to the temperature drop caused by fuel vaporization and pressure reduction in the venturi",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "Basic Aircraft Systems",
        section: "Engine Systems",
        description: "Carburetor icing"
      }]
    },
    {
      id: "rpl-bak-034",
      type: "multiple-choice",
      text: "What is the maximum crosswind component for your aircraft if the demonstrated crosswind is 15 knots?",
      options: [
        "12 knots",
        "15 knots",
        "18 knots",
        "20 knots"
      ],
      correctAnswer: 1,
      explanation: "The maximum crosswind component is the demonstrated crosswind value stated in the POH/AFM",
      subjectArea: SubjectArea.AIRCRAFT_KNOWLEDGE,
      difficulty: "medium",
      references: [{
        document: "POH",
        section: "Limitations",
        description: "Wind limitations"
      }]
    },
    {
      id: "rpl-bak-035",
      type: "multiple-choice",
      text: "Under what conditions must flight crew members wear safety harnesses during flight?",
      options: [
        "During takeoff and landing only",
        "When turbulence is expected",
        "At all times during flight",
        "Below 1000 feet AGL"
      ],
      correctAnswer: 2,
      explanation: "Flight crew members must wear safety harnesses at all times during flight",
      subjectArea: SubjectArea.FLIGHT_RULES,
      difficulty: "easy",
      references: [{
        document: "CAR 251",
        section: "251.1",
        description: "Safety harness requirements"
      }]
    }
  ]
}; 