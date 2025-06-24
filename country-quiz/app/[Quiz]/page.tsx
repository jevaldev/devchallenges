"use client";

import { useEffect } from "react";
import { QuestionTypes } from "../components/questionTypes";
import { useQuiz } from "../Hooks/useQuiz";
import QuestionButtons from "../components/questionButtons";
import { SkeletonQuiz } from "../components/skeletonQuiz";
import { Answer } from "../types/Answer";

interface Props {
  answers: Record<number, Answer>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, Answer>>>;
}

export default function Quiz({ answers, setAnswers }: Props) {
  const { questions, error, currentIndex, generateQuiz, nextQuestion } =
    useQuiz();

  useEffect(() => {
    generateQuiz();
  }, [generateQuiz]);

  const handleAnswer = (
    questionIndex: number,
    option: string,
    correctAnswer: string
  ) => {
    if (answers[questionIndex]) return;
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: {
        selected: option,
        isCorrect: option === correctAnswer,
      },
    }));
  };

  if (questions.length === 0) return <SkeletonQuiz />;

  if (error) {
    return (
      <section className="bg-[#343964] w-full h-[320px] rounded-2xl p-8 shadow-xl flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-center text-red-500">
          Error loading questions: <span className="text-white">{error}</span>
        </h2>
      </section>
    );
  }

  const current = questions[currentIndex];

  return (
    <section className="bg-[#343964] w-full rounded-2xl p-8 shadow-xl flex flex-col gap-6">
      <ul className="flex flex-wrap justify-center items-center gap-4 ">
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] cursor-pointer ${
                currentIndex === index || answers[index]
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-[#393F6E] text-white"
              }`}
              onClick={() => nextQuestion(index)}
            >
              {" "}
              {index + 1}{" "}
            </button>
          </li>
        ))}
      </ul>

      <QuestionTypes current={current} />

      <QuestionButtons
        current={current}
        questionIndex={currentIndex}
        selectedAnswer={answers[currentIndex] || null}
        onAnswer={handleAnswer}
      />
    </section>
  );
}
