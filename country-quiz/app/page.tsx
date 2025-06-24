"use client";

import { Trophy } from "@/public/trophy";
import Quiz from "./[Quiz]/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "./Context/QuizContext";

export default function Home() {
  const router = useRouter();
  const { answers, setAnswers, score } = useQuiz();

  useEffect(() => {
    if (Object.keys(answers).length === 10) {
      router.push("/congrats");
    }
  }, [answers, router]);

  return (
    <main className="grow-1 flex flex-col items-center justify-center px-7 py-6 rounded-2xl gap-8 w-[80ch]">
      <header className="flex justify-between w-full items-center">
        <h1 className="text-3xl font-semibold">Country Quiz</h1>{" "}
        <div className="font-medium text-base flex items-center gap-2 bg-gradient py-2 px-4 rounded-3xl">
          <Trophy /> <p> {score}/10 Points</p>
        </div>
      </header>
      <Quiz answers={answers} setAnswers={setAnswers} />
    </main>
  );
}
