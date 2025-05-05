import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Quiz_Questions } from "../../question-data";

export const Questions = () => {
  const [count, setCount] = useState(1); //State that stores the total count of questions attempted
  const [nextQuestion, setNextQuestion] = useState(0); //state which is use to take next or previous question

  const questionsArray = Object.values(Quiz_Questions); //converts the object into the array
  const arrayLength = questionsArray.length; //finds the length of the array

  const [selectedAnswer, setSelectedAnswer] = useState(
    // state that stores the selected answers by the user
    Array(arrayLength).fill(null)
  );

  const [score, setScore] = useState(0);

  // Function to handle next Question
  const handleNextQuestion = () => {
    setNextQuestion(nextQuestion + 1);
    setCount(count + 1);
  };

  // Function to handle previous Question
  const handlePreviousQuestion = () => {
    setNextQuestion(nextQuestion - 1);
  };

  // Function to restart the quiz
  const handleRestartQuiz = () => {
    setNextQuestion(0);
    setCount(1);
    setSelectedAnswer([]);
    console.log("Restart Quiz:", nextQuestion);
    console.log("Reset Count:", count);
    console.log("Selected answer is:", selectedAnswer);
  };

  // Function that stores the selected answer and process the final score
  const handleSelectedAnswer = (answer: string, index: number) => {
    const updatedAnswer = [...selectedAnswer];
    updatedAnswer[index] = answer;
    setSelectedAnswer(updatedAnswer);
    console.log("Selected Answer is:", updatedAnswer);
  };

  const handleSubmitQuiz = () => {
    setCount(count + 1);
    const finalScore = calculateScore(selectedAnswer, questionsArray);
    setScore(finalScore.percentage);
    console.log(`Your score: ${finalScore}/${arrayLength}`);
  };

  const calculateScore = (
    selectedAnswers: string[],
    questionsArray: any
  ): { points: number; percentage: number } => {
    let score = 0;
    const questionKeys = Object.keys(questionsArray);

    // Loop through each question
    questionKeys.forEach((key, index) => {
      const correctAnswer = questionsArray[key].answer;
      const userAnswer = selectedAnswers[index];

      // Check if the user's answer matches the correct answer
      if (userAnswer === correctAnswer) {
        score += 1;
      }
    });

    // Calculate percentage (rounded to 2 decimal places)
    const percentage =
      arrayLength > 0
        ? Math.round((score / arrayLength) * 100 * 100) / 100
        : 0;

    return {
      points: score,
      percentage: percentage,
    };
  };

  if (count > arrayLength) {
    console.log("No Next Question Present!");
    return (
      <div className="flex flex-col gap-[1rem] items-center">
        <div className="text-green-500 font-bold mx-[1rem] text-center text-[2rem]">
          {" "}
          Your score is: {score}%
        </div>
        <button
          onClick={handleRestartQuiz}
          className="w-[10rem] h-[3rem] text-[1rem] rounded-xl cursor-pointer border-[2px] hover:bg-blue-400"
        >
          Restart Quiz
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="mx-[1rem] flex flex-col text-[1rem]">
        {questionsArray.map((item, index) => {
          if (nextQuestion === index) {
            console.log(
              "Value of nextQuestion and index is:",
              nextQuestion,
              index
            );
            return (
              <div key={index}>
                <h1 className="text-blue-400">
                  {`Question ${index + 1} : ${item.statement}`}
                </h1>
                <form className="flex flex-col">
                  {item.options.map((item) => {
                    return (
                      <div
                        className="flex items-center gap-[1rem] p-[0.5rem]"
                        key={uuidv4()}
                        id={uuidv4()}
                      >
                        <input
                          type="radio"
                          name="question1"
                          className="w-[1rem] h-[1rem] accent-blue-400 border-none outline-none"
                          id={uuidv4()}
                          onChange={() => {
                            handleSelectedAnswer(item, index);
                          }}
                          checked={selectedAnswer[index] === item} // This is the key line
                        />
                        {item}
                      </div>
                    );
                  })}
                </form>
              </div>
            );
          }
        })}
      </div>
      <div className="mx-[1rem] flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          className={
            count === 1
              ? "w-[6rem] h-[3rem] border-[2px] rounded-xl cursor-not-allowed"
              : "w-[6rem] h-[3rem] border-[2px] rounded-xl cursor-pointer hover:bg-blue-400"
          }
          disabled={count === 1 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={count === 5 ? handleSubmitQuiz : handleNextQuestion}
          className="w-[6rem] h-[3rem] border-[2px] rounded-xl cursor-pointer hover:bg-blue-400"
        >
          {count === 5 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};
