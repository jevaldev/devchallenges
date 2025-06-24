import { QuizQuestion } from "../Hooks/useQuiz";
import Image from "next/image";

type Params = {
  current: QuizQuestion;
};

export function QuestionTypes({ current }: Params) {
  return (
    <>
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
    </>
  );
}
