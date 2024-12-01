import { type KnowledgeTest as Exam } from '../examTypes';
import { rplAirLawExam } from './rpl/air-law';
import { rplFlightRulesExam } from './rpl/flight-rules';
import { rplAircraftKnowledgeExam } from './rpl/aircraft-knowledge';
import { rplNavigationExam } from './rpl/navigation';
import { rplMeteorologylExam } from './rpl/meteorology';
import { rplHumanFactorsExam } from './rpl/human-factors';

import { pplAirLawExam } from './ppl/air-law';
import { pplFlightRulesExam } from './ppl/flight-rules';
import { pplAircraftKnowledgeExam } from './ppl/aircraft-knowledge';
import { pplNavigationExam } from './ppl/navigation';
import { pplMeteorologylExam } from './ppl/meteorology';
import { pplHumanFactorsExam } from './ppl/human-factors';

export { type Exam };

export const allExams: Exam[] = [
  // RPL Exams
  rplAirLawExam,
  rplFlightRulesExam,
  rplAircraftKnowledgeExam,
  rplNavigationExam,
  rplMeteorologylExam,
  rplHumanFactorsExam,
  
  // PPL Exams
  pplAirLawExam,
  pplFlightRulesExam,
  pplAircraftKnowledgeExam,
  pplNavigationExam,
  pplMeteorologylExam,
  pplHumanFactorsExam
];

export {
  // RPL Exams
  rplAirLawExam,
  rplFlightRulesExam,
  rplAircraftKnowledgeExam,
  rplNavigationExam,
  rplMeteorologylExam,
  rplHumanFactorsExam,
  
  // PPL Exams
  pplAirLawExam,
  pplFlightRulesExam,
  pplAircraftKnowledgeExam,
  pplNavigationExam,
  pplMeteorologylExam,
  pplHumanFactorsExam
}; 