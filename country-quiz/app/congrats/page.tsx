"use client";

import Image from "next/image";
import CongratulationsImage from "../../public/congrats.png";
import { useQuiz } from "../Context/QuizContext";
import { useRouter } from "next/navigation";

export default function Congratulations() {
  const { score, resetQuiz } = useQuiz();
  const router = useRouter();

  const handlePlayAgain = () => {
    resetQuiz();
    router.push("/");
  };

  return (
    <div className="grow-1 flex justify-center items-center">
      <main className="px-7 py-6 bg-[#343964] rounded-2xl shadow-xl">
        <section className="flex flex-col items-center justify-center w-[340px] gap-2">
          <Image
            src={CongratulationsImage}
            alt="Congratulations"
            width={340}
            height={100}
          />
          <h1 className="text-2xl font-medium mt-4 text-center">
            Congrats! You completed the quiz.
          </h1>
          <p className="font-medium text-base">
            You answer {score}/10 correctly
          </p>
          <button
            onClick={handlePlayAgain}
            className="bg-gradient px-6 py-4 w-8/12 my-9 rounded-xl font-semibold cursor-pointer"
          >
            Play again!
          </button>
        </section>
      </main>
    </div>
  );
}
