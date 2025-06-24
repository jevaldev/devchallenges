"use client";

import { Trophy } from "@/public/trophy";
import Quiz from "./[Quiz]/page";

export default function Home() {
  return (
    <main className="grow-1 flex flex-col items-center justify-center px-7 py-6 rounded-2xl gap-8 w-[80ch]">
      <header className="flex justify-between w-full items-center">
        <h1 className="text-3xl font-semibold">Country Quiz</h1>{" "}
        <div className="font-medium text-base flex items-center gap-2 bg-gradient py-2 px-4 rounded-3xl">
          <Trophy /> <p> 0/10 Points</p>
        </div>
      </header>
      <Quiz />
    </main>
  );
}
