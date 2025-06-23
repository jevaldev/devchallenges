import { useState, useEffect, useCallback } from "react";

interface Country {
  name: {
    common: string;
  };
  currencies: {
    name: string;
    symbol: string;
  };
  capital: string;
  languages: [string];
  borders: [string];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}

export function useQuiz() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Country | null>(null);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?limit=10&fields=name,flags,currencies,capital,languages,borders"
      );
      const data = await response.json();
      setCountries(data);
    }

    fetchCountries();
  }, []);

  const generateQuestions = useCallback(() => {
    if (countries.length === 0) return;

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

    setCurrentQuestion(selectedCountry);
    setOptions(answers);
  }, [countries]);

  return { currentQuestion, options, generateQuestions };
}
