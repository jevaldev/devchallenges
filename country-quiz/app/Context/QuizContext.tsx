"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Answer } from "@/app/types/Answer";

interface QuizContextType {
  answers: Record<number, Answer>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, Answer>>>;
  score: number;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const score = Object.values(answers).filter((a) => a.isCorrect).length;

  const resetQuiz = () => {
    setAnswers({});
  };
  return (
    <QuizContext.Provider value={{ answers, setAnswers, score, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}
