'use client';
import { useState, useEffect } from 'react';
import { Question } from '../data/questionTypes';
import Image from 'next/image';

type QuestionCardProps = {
  question: Question;
  onAnswer: (selectedOption: number) => void;
  selectedAnswer: number;
};

export default function QuestionCard({ question, onAnswer, selectedAnswer }: QuestionCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (index: number) => {
    onAnswer(index);
    setShowExplanation(true);
  };

  useEffect(() => {
    setShowExplanation(selectedAnswer !== -1);
  }, [selectedAnswer]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl mb-4">{question.text}</h3>
      
      {question.image && (
        <div className="mb-6">
          <Image
            src={question.image.src}
            alt={question.image.alt}
            width={600}
            height={400}
            className="rounded-lg"
          />
          {question.image.caption && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {question.image.caption}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`w-full text-left p-3 rounded-lg border transition-colors ${
              selectedAnswer === index
                ? selectedAnswer === question.correctAnswer
                  ? 'bg-green-100 border-green-500 dark:bg-green-900'
                  : 'bg-red-100 border-red-500 dark:bg-red-900'
                : 'border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700'
            }`}
            disabled={selectedAnswer !== -1}
          >
            {option}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-4 space-y-4">
          {question.explanation && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm">{question.explanation}</p>
            </div>
          )}
          
          {question.references && question.references.length > 0 && (
            <div className="p-4 bg-gray-50 dark:bg-gray-900/30 rounded-lg">
              <h4 className="text-sm font-semibold mb-2">Reference Sources:</h4>
              <ul className="space-y-2">
                {question.references.map((ref, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{ref.document}</span>
                    {ref.section && <span> - Section {ref.section}</span>}
                    {ref.description && (
                      <span className="text-gray-600 dark:text-gray-400">
                        {' '}({ref.description})
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 