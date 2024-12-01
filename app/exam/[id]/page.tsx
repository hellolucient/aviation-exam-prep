'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { allExams } from '../../data/exams/index';
import { type Question } from '../../data/questionTypes';
import QuestionCard from '../../components/QuestionCard';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function KnowledgeTestPage() {
  const params = useParams();
  const exam = allExams.find(e => e.id === params.id);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [examCompleted, setExamCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40); // 40 seconds per question
  const [isShaking, setIsShaking] = useState(false);

  const goToNextQuestion = () => {
    if (!exam) return;
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setExamCompleted(true);
    }
  };

  useEffect(() => {
    if (exam) {
      setAnswers(new Array(exam.questions.length).fill(-1));
    }
  }, [exam]);

  // Timer effect
  useEffect(() => {
    if (examCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // Add shake effect
          setIsShaking(true);
          setTimeout(() => {
            setIsShaking(false);
            goToNextQuestion();
          }, 500); // Wait for animation to complete
          return 40;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examCompleted, goToNextQuestion]);

  // Reset timer when moving to next question
  useEffect(() => {
    setTimeLeft(40);
  }, [currentQuestionIndex]);

  if (!exam) {
    return <div>Exam not found</div>;
  }

  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
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

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const currentQuestion = exam.questions[currentQuestionIndex];
  const score = calculateScore();

  if (examCompleted) {
    return (
      <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
        <main className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Knowledge Test Results</h2>
            <div className="text-lg mb-4">
              Score: {score.score} out of {score.total} ({score.percentage}%)
            </div>
            <div className="space-y-4 mb-6">
              {exam.questions.map((question: Question, index: number) => (
                <div key={index} className={`p-4 rounded-lg ${
                  answers[index] === question.correctAnswer 
                    ? 'bg-green-100 dark:bg-green-900/30' 
                    : 'bg-red-100 dark:bg-red-900/30'
                }`}>
                  <p className="font-medium">{question.text}</p>
                  <p className="text-sm mt-2">
                    Your answer: {question.options[answers[index]]}
                  </p>
                  <p className="text-sm mt-1">
                    Correct answer: {question.options[question.correctAnswer]}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/tests">
                <button className="rounded-full bg-foreground text-background px-6 py-2 text-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
                  Exit Knowledge Test
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-8 pb-20 gap-8 sm:p-20 ${isShaking ? 'shake-animation' : ''}`}>
      <main className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{exam.title}</h1>
            <Link href="/tests">
              <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                Exit Knowledge Test
              </button>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300">
              Question {currentQuestionIndex + 1} of {exam.questions.length}
            </p>
            <div className={`font-mono text-lg ${timeLeft <= 10 ? 'text-red-500' : ''}`}>
              Time left: {formatTime(timeLeft)}
            </div>
          </div>
        </header>

        <QuestionCard
          question={currentQuestion}
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
          <button
            onClick={goToNextQuestion}
            className="px-4 py-2 rounded-lg bg-foreground text-background"
          >
            {currentQuestionIndex === exam.questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </main>
    </div>
  );
} 