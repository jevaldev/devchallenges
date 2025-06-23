"use client";

import { Trophy } from "@/public/trophy";
import { useQuiz } from "./useQuiz";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const { currentQuestion, options, generateQuestions } = useQuiz();

  useEffect(() => {
    generateQuestions();
  }, [generateQuestions]);

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <main className="grow-1 flex flex-col items-center justify-center px-7 py-6 rounded-2xl gap-8 w-[80ch]">
      <header className="flex justify-between w-full items-center">
        <h1 className="text-3xl font-semibold">Country Quiz</h1>{" "}
        <div className="font-medium text-base flex items-center gap-2 bg-gradient py-2 px-4 rounded-3xl">
          <Trophy /> <p> 0/10 Points</p>
        </div>
      </header>
      <section className="bg-[#343964] w-full rounded-2xl p-14 shadow-xl flex flex-col gap-4">
        <ul className="flex flex-wrap justify-center items-center gap-4">
          <li className="bg-gradient px-4 py-2 rounded-full">1</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">2</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">3</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">4</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">5</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">6</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">7</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">8</li>
          <li className="bg-[#393F6E] px-4 py-2 rounded-full">9</li>
          <li className="bg-[#393F6E] px-3 py-2 rounded-full">10</li>
        </ul>
        <h2 className="text-xl font-semibold text-center flex items-center justify-center gap-2">
          Which country does this flag{" "}
          <span>
            <Image
              src={currentQuestion?.flags.svg}
              alt={currentQuestion?.flags.alt}
              width={24}
              height={24}
            />
          </span>{" "}
          belong to?
        </h2>
        <div className="grid grid-cols-2 gap-6 mt-8 content-center w-9/12 mx-auto">
          {options.map((option, idx) => (
            <button
              key={idx}
              className="bg-[#393F6E] py-4 rounded-xl cursor-pointer font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8]"
            >
              {option}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
