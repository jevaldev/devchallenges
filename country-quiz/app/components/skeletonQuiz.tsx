export function SkeletonQuiz() {
  return (
    <section className="bg-[#343964] w-full rounded-2xl p-8 shadow-xl flex flex-col gap-6 animate-pulse">
      <ul className="flex flex-wrap justify-center items-center gap-4 ">
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>
            <button className="bg-[#393F6E] px-4 py-2 rounded-full transition-all duration-300 ">
              {" "}
              {index + 1}{" "}
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-center text-white animate-pulse">
        Loading questions, please wait...
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {Array.from({ length: 4 }, (_, idx) => (
          <button
            key={idx}
            className="bg-[#393F6E] py-4 rounded-xl text-white font-semibold transition-all duration-300 animate-pulse"
          >
            Loading...
          </button>
        ))}
      </div>
    </section>
  );
}
