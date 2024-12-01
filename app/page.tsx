import Link from 'next/link';
import { allExams, type Exam } from './data/exams/index';
import { ExamLevel, SubjectArea } from './data/examTypes';
import { allPracticeExams } from './data/practice-exams';

export default function Home() {
  const groupedExams = allExams.reduce((acc: Record<ExamLevel, Record<SubjectArea, Exam[]>>, exam: Exam) => {
    if (!acc[exam.level as ExamLevel]) {
      const initialSubjects = {} as Record<SubjectArea, Exam[]>;
      Object.values(SubjectArea).forEach(area => {
        initialSubjects[area as SubjectArea] = [];
      });
      acc[exam.level as ExamLevel] = initialSubjects;
    }
    acc[exam.level as ExamLevel][exam.subjectArea as SubjectArea].push(exam);
    return acc;
  }, {} as Record<ExamLevel, Record<SubjectArea, Exam[]>>);

  return (
    <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Aviation Knowledge Tests</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Practice your aviation knowledge with topic-specific tests
          </p>
        </header>

        {Object.entries(groupedExams).map(([level, subjects]: [string, Record<SubjectArea, Exam[]>]) => (
          <div key={level} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{level}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(subjects).map(([subject, examList]: [string, Exam[]]) => (
                <div key={subject} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{subject}</h3>
                  <div className="space-y-4">
                    {examList.map((exam: Exam) => (
                      <div key={exam.id} className="border-t pt-4 first:border-t-0 first:pt-0">
                        <h4 className="font-medium mb-2">{exam.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          {exam.description}
                        </p>
                        <Link href={`/exam/${exam.id}`}>
                          <button className="rounded-full bg-foreground text-background px-6 py-2 text-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
                            Start Knowledge Test
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <section className="mt-16">
          <header className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Practice Exams</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Full-length practice exams following CASA format
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allPracticeExams.map((exam) => (
              <div key={exam.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{exam.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {exam.description}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <div>Time limit: {exam.timeLimit} minutes</div>
                  <div>Questions: {exam.questions.length}</div>
                  <div>Pass mark: {exam.passingScore}%</div>
                </div>
                <Link href={`/practice-exam/${exam.id}`}>
                  <button className="rounded-full bg-foreground text-background px-6 py-2 text-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
                    Start Practice Exam
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
