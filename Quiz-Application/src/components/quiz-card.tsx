import { Questions } from "./questions";


export const QuizCard = () => {
  return (
    <div className="w-[50rem] h-[70%] border-[2px] border-blue-400 text-[#fff] rounded-xl font-[Poppins] flex flex-col gap-[1rem]">
      {/* Heading */}
      <h1 className="text-[2rem] font-bold text-blue-400 text-center">
        TypeScript Quiz
      </h1>

      {/* Quiz Instruction */}
      <div className="px-[1rem]">
        <h1 className="text-red-400 font-semibold text-[1.2rem]">
          Instructions to be followed
        </h1>
        <ul className="list-disc px-[2rem]">
          <li>Select only one option for each question</li>
          <li>No Negative marking</li>
          <li>No time limit</li>
          <li>Attempt all question properly</li>
        </ul>
      </div>

      <div>
        <Questions/>
      </div>

    </div>
  );
};
