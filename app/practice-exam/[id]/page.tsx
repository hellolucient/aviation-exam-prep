'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { type PracticeExam, SubjectArea } from '@/data/examTypes';
import { allPracticeExams } from '@/data/practice-exams';
import Image from 'next/image';

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const getTimerStyle = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  
  if (minutes <= 5) {
    return "font-mono text-lg text-red-600 dark:text-red-500 font-bold animate-pulse";
  }
  if (minutes <= 10) {
    return "font-mono text-lg text-red-600 dark:text-red-500 font-bold";
  }
  if (minutes <= 15) {
    return "font-mono text-lg text-red-600 dark:text-red-500";
  }
  return "font-mono text-lg";
};

// Add this helper function for subject area analysis
const getSubjectAreaResults = (exam: PracticeExam, answers: number[]) => {
  const results = new Map<SubjectArea, { total: number; correct: number }>();
  
  exam.questions.forEach((question, index) => {
    const area = question.subjectArea;
    const current = results.get(area) || { total: 0, correct: 0 };
    results.set(area, {
      total: current.total + 1,
      correct: current.correct + (answers[index] === question.correctAnswer ? 1 : 0)
    });
  });
  
  return results;
};

export default function PracticeExamPage() {
  const params = useParams();
  const exam = allPracticeExams.find((e: PracticeExam) => e.id === params.id);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Move goToNextQuestion before the useEffect that uses it
  const goToNextQuestion = () => {
    if (!exam) return;
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setExamCompleted(true);
    }
  };

  // Initialize exam
  useEffect(() => {
    if (exam) {
      setAnswers(new Array(exam.questions.length).fill(-1));
      setTimeRemaining(exam.timeLimit * 60);
    }
  }, [exam]);

  // Timer effect
  useEffect(() => {
    if (!examStarted || examCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          goToNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examCompleted, goToNextQuestion]);

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
                  {exam.examInstructions.map((instruction: string, index: number) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Allowed Materials:</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {exam.allowedMaterials.map((material: string, index: number) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between mt-8">
                <Link href="/tests">
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

  // During exam, only show question and options
  if (!examCompleted) {
    return (
      <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
        <main className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">{exam.title}</h1>
              <div className={getTimerStyle(timeRemaining)}>
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

          {/* Question Card without showing correct answer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="text-lg mb-4">{exam.questions[currentQuestionIndex].text}</p>
            {exam.questions[currentQuestionIndex].image && (
              <div className="mb-4">
                <Image 
                  src={exam.questions[currentQuestionIndex].image.src}
                  alt={exam.questions[currentQuestionIndex].image.alt}
                  width={500}
                  height={300}
                  className="mx-auto"
                />
                <p className="text-sm text-center text-gray-600 mt-2">
                  {exam.questions[currentQuestionIndex].image.caption}
                </p>
              </div>
            )}
            <div className="space-y-3">
              {exam.questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-3 rounded-lg ${
                    answers[currentQuestionIndex] === index
                      ? "bg-blue-100 dark:bg-blue-900"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation and End Exam buttons in separate areas */}
          <div className="mt-6 space-y-4">
            {/* Regular navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={goToNextQuestion}
                className="px-4 py-2 rounded-lg bg-foreground text-background"
              >
                {currentQuestionIndex === exam.questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>

            {/* Separate End Exam button */}
            <div className="flex justify-center border-t pt-4">
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to end the exam early?')) {
                    if (window.confirm('This will submit your exam with all current answers. This action cannot be undone. Continue?')) {
                      setExamCompleted(true);
                    }
                  }
                }}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
              >
                End Exam Early
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
                  answer !== -1 
                    ? "bg-blue-200 dark:bg-blue-800"
                    : "bg-gray-200 dark:bg-gray-700"
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

  // Enhanced results view
  if (examCompleted) {
    const score = calculateScore();
    const subjectResults = getSubjectAreaResults(exam, answers);
    
    return (
      <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
        <main className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            {/* Overall Results */}
            <h2 className="text-2xl font-bold mb-6">Practice Exam Results</h2>
            <div className="text-lg mb-4">
              <div className="flex justify-between items-center">
                <span>Overall Score: {score.score} out of {score.total} ({score.percentage}%)</span>
                {score.percentage >= exam.passingScore ? (
                  <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full font-bold">PASS</span>
                ) : (
                  <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full font-bold">FAIL</span>
                )}
              </div>
            </div>

            {/* Subject Area Breakdown */}
            <div className="mt-8 mb-8">
              <h3 className="text-lg font-semibold mb-4">Performance by Subject Area</h3>
              <div className="space-y-4">
                {Array.from(subjectResults.entries()).map(([subject, result]) => (
                  <div key={subject} className="flex items-center justify-between">
                    <span className="text-sm">{subject}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">{result.correct}/{result.total}</span>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600"
                          style={{ width: `${(result.correct / result.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm w-12">
                        {Math.round((result.correct / result.total) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Question Review */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Question Review</h3>
              <div className="space-y-6">
                {exam.questions.map((question, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${
                      answers[index] === question.correctAnswer 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200' 
                        : 'bg-red-50 dark:bg-red-900/20 border border-red-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Question {index + 1}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {question.subjectArea}
                      </span>
                    </div>
                    
                    <p className="mb-4">{question.text}</p>
                    
                    {question.image && (
                      <div className="mb-4">
                        <Image 
                          src={question.image.src}
                          alt={question.image.alt}
                          width={500}
                          height={300}
                          className="mx-auto"
                        />
                      </div>
                    )}

                    <div className="space-y-2 text-sm">
                      <p className={answers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}>
                        Your answer: {question.options[answers[index]]}
                      </p>
                      <p className="text-green-600">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {question.explanation}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Reference: {question.references?.[0]?.document} - {question.references?.[0]?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/tests">
                <button className="rounded-full bg-foreground text-background px-6 py-2 text-sm hover:bg-[#383838] dark:hover:bg-[#ccc]">
                  Return Home
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}