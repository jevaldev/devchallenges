import { useState, useEffect, useCallback } from "react";
import { Country } from "./types/Country";
import { QuestionType } from "./types/QuestionType";

export interface QuizQuestion {
  type: QuestionType;
  country: Country;
  options: string[];
}

export function useQuiz() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages,flags,borders"
      );
      const data: Country[] = await res.json();
      setCountries(data);
    }

    fetchCountries();
  }, []);

  const generateQuestion = useCallback((): QuizQuestion => {
    const questionTypes: QuestionType[] = [
      "flag",
      "capital",
      "currency",
      "language",
      "borders",
    ];
    const type =
      questionTypes[Math.floor(Math.random() * questionTypes.length)];

    const randomIndex = Math.floor(Math.random() * countries.length);
    const selectedCountry = countries[randomIndex];

    const otherOptions = countries
      .filter((_, i) => i !== randomIndex)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((c) => c.name.common);

    const answers = [...otherOptions, selectedCountry.name.common].sort(
      () => 0.5 - Math.random()
    );

    return {
      type,
      country: selectedCountry,
      options: answers,
    };
  }, [countries]);

  const generateQuiz = useCallback(() => {
    if (countries.length === 0) return;
    const quiz = Array.from({ length: 10 }, () => generateQuestion());
    setQuestions(quiz);
  }, [countries, generateQuestion]);

  function nextQuestion(quizIndex: number) {
    setCurrentIndex(quizIndex);
  }

  return {
    countries,
    questions,
    currentIndex,
    generateQuiz,
    nextQuestion,
  };
}
