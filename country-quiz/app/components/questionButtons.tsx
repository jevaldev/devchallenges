import { Answer } from "../types/Answer";
import { QuizQuestion } from "../Hooks/useQuiz";
import Image from "next/image";

type Params = {
  current: QuizQuestion;
  questionIndex: number;
  selectedAnswer: Answer | null;
  onAnswer: (
    questionIndex: number,
    option: string,
    correctAnswer: string
  ) => void;
};

export default function QuestionButtons({
  current,
  questionIndex,
  selectedAnswer,
  onAnswer,
}: Params) {
  const checkAnswer = (option: string) => {
    if (selectedAnswer) return;
    onAnswer(questionIndex, option, current.country.name.common);
  };

  return (
    <div className="grid grid-cols-2 gap-6 w-10/12 mx-auto">
      {current.options.map((option, idx) => {
        const isSelected = selectedAnswer?.selected === option;
        const isCorrect = option === current.country.name.common;

        let buttonClass = "bg-[#393F6E] text-white";
        if (selectedAnswer && isSelected) {
          buttonClass =
            "bg-gradient-to-r from-pink-500 to-purple-500 text-white";
        }

        return (
          <button
            key={idx}
            onClick={() => checkAnswer(option)}
            disabled={!!selectedAnswer && isSelected}
            className={`py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] cursor-pointer ${buttonClass} flex items-center justify-center gap-2 px-4`}
          >
            <span>{option}</span>

            {selectedAnswer && (
              <span>
                {isSelected ? (
                  isCorrect ? (
                    <Image
                      src="/Check_round_fill.svg"
                      alt="✅"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/Close_round_fill.svg"
                      alt="❌"
                      width={24}
                      height={24}
                    />
                  )
                ) : isCorrect ? (
                  <Image
                    src="/Check_round_fill.svg"
                    alt="✅"
                    width={24}
                    height={24}
                  />
                ) : null}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
