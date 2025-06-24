"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useQuiz } from "../useQuiz";

export default function Quiz() {
  const { questions, currentIndex, generateQuiz, nextQuestion } = useQuiz();

  useEffect(() => {
    generateQuiz();
  }, [generateQuiz]);

  if (questions.length === 0)
    return <div className="text-white">Loading Quiz...</div>;

  const current = questions[currentIndex];

  return (
    <section className="bg-[#343964] w-full rounded-2xl p-8 shadow-xl flex flex-col gap-6">
      <ul className="flex flex-wrap justify-center items-center gap-4 ">
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>
            <button
              className="bg-[#393F6E] px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] cursor-pointer"
              onClick={() => nextQuestion(index)}
            >
              {" "}
              {index + 1}{" "}
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-center text-white">
        {current.type === "flag" && (
          <>
            Which country does this flag
            <Image
              src={current.country.flags.svg}
              alt="flag"
              width={32}
              height={24}
              className="inline mx-2"
            />
            belong to?
          </>
        )}
        {current.type === "capital" && (
          <>
            Which country has {current.country.capital?.[0] || "Unknown"} as its
            capital?
          </>
        )}
        {current.type === "currency" && (
          <>
            What country uses{" "}
            {Object.values(current.country.currencies || {})[0]?.name ||
              "Unknown"}{" "}
            {Object.values(current.country.currencies || {})[0]?.symbol || ""}{" "}
            as currency?
          </>
        )}
        {current.type === "language" && (
          <>
            In which country is{" "}
            {Object.values(current.country.languages || {})[0] || "Unknown"}{" "}
            spoken?
          </>
        )}
        {current.type === "borders" && (
          <>
            Which country shares borders with{" "}
            {current.country.borders?.join(", ") || "No borders"}?
          </>
        )}
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {current.options.map((option, idx) => (
          <button
            key={idx}
            className="bg-[#393F6E] py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] cursor-pointer"
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}
