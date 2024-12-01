'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { type PracticeExam } from '../data/examTypes';
import { allPracticeExams } from '../data/practice-exams';
import QuestionCard from '../components/QuestionCard';

// Add this helper function
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function PracticeExamPage() {
  const params = useParams();
  const router = useRouter();
  const exam = allPracticeExams.find(e => e.id === params.id);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Initialize exam
  useEffect(() => {
    if (exam) {
      setAnswers(new Array(exam.questions.length).fill(-1));
      setTimeRemaining(exam.timeLimit * 60); // Convert minutes to seconds
    }
  }, [exam]);

  // Timer effect
  useEffect(() => {
    if (!examStarted || examCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setExamCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examCompleted]);

  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    if (!exam) return { score: 0, total: 0, percentage: 0 };
    const correctAnswers = answers.reduce((count, answer, index) => {
      return count + (answer === exam.questions[index].correctAnswer ? 1 : 0);
    }, 0);
    return {
      score: correctAnswers,
      total: exam.questions.length,
      percentage: Math.round((correctAnswers / exam.questions.length) * 100)
    };
  };

  const goToNextQuestion = () => {
    if (!exam) return;
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setExamCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!exam) {
    return <div>Exam not found</div>;
  }

  // Pre-exam instructions view
  if (!examStarted) {
    return (
      <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
        <main className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl font-bold mb-6">{exam.title}</h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {exam.examInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Allowed Materials:</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {exam.allowedMaterials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between mt-8">
                <Link href="/">
                  <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                    Return Home
                  </button>
                </Link>
                <button
                  onClick={() => setExamStarted(true)}
                  className="px-4 py-2 rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
                >
                  Start Exam
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Add score calculation before the completed view
  const score = calculateScore();

  // Add exam view after the pre-exam instructions view
  if (examCompleted) {
    return (
      <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
        <main className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Exam Results</h2>
            <div className="text-lg mb-4">
              Score: {score.score} out of {score.total} ({score.percentage}%)
              {score.percentage >= exam.passingScore ? (
                <span className="text-green-600 ml-2">PASS</span>
              ) : (
                <span className="text-red-600 ml-2">FAIL</span>
              )}
            </div>
            {/* ... rest of results view ... */}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <main className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{exam.title}</h1>
            <div className="font-mono text-lg">
              Time remaining: {formatTime(timeRemaining)}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300">
              Question {currentQuestionIndex + 1} of {exam.questions.length}
            </p>
            <div className="text-sm text-gray-500">
              {answers[currentQuestionIndex] === -1 ? "Not answered" : "Answered"}
            </div>
          </div>
        </header>

        <QuestionCard
          question={exam.questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          selectedAnswer={answers[currentQuestionIndex]}
        />

        <div className="mt-6 flex justify-between">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              Mark for Review
            </button>
            <button
              onClick={goToNextQuestion}
              className="px-4 py-2 rounded-lg bg-foreground text-background"
            >
              {currentQuestionIndex === exam.questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="mt-8 grid grid-cols-6 gap-2">
          {answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`p-2 rounded ${
                answer === -1 
                  ? "bg-gray-200 dark:bg-gray-700" 
                  : "bg-green-200 dark:bg-green-900"
              } ${currentQuestionIndex === index ? "ring-2 ring-blue-500" : ""}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
} 