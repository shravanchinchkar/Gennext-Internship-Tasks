import { useState } from "react";

export const Hobbies = () => {
  const [displayHobbies, setDisplayHobbies] = useState(false);

  const handleHobbies = () => {
    if (displayHobbies === false) {
      setDisplayHobbies(true);
    } else {
      setDisplayHobbies(false);
    }
    console.log("Hello!");
  };

  const hoddies = ["Driving Cars", "Gym", "Riding Bikes"];
  return (
    <div
      className={`flex flex-col gap-[1rem] ${
        displayHobbies
          ? "newsm:my-0 sm:my-[1rem]"
          : "newsm:my-[1rem] sm:my-[2rem]"
      }`}
    >
      {/* Following is the toggle button */}
      <div className="flex justify-around items-center text-[#3E7B27] newsm:text-[0.7rem] sm:text-[1.1rem]">
        <h2
          className={
            !displayHobbies
              ? "font-semibold underline bg-[#fff] px-[1rem] rounded-md"
              : "font-normal text-[#fff]"
          }
        >
          Hide Hoddies
        </h2>
        <div className="pt-[0.5rem]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              value=""
              onChange={handleHobbies}
            />
            <div className="group peer bg-white rounded-full duration-300 newsm:w-10 newsm:h-5 md:w-16 md:h-8 ring-2 ring-[#3E7B27] after:duration-300 after:bg-green-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute newsm:after:w-4 newsm:after:h-4  md:after:h-6 md:after:w-6 newsm:after:top-0.5 md:after:top-1 after:left-1 after:flex after:justify-center after:items-center newsm:peer-checked:after:translate-x-4 md:peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
          </label>
        </div>
        <h2
          className={
            displayHobbies
              ? "font-semibold underline bg-[#fff] px-[1rem] rounded-md"
              : "font-normal text-[#fff]"
          }
        >
          Show Hobbies
        </h2>
      </div>

      {/* Following div consist of hobbies list */}
      <div className={!displayHobbies ? "hidden" : "flex justify-around"}>
        {hoddies.map((item, index) => {
          return (
            <p
              key={index}
              className="newsm:w-[5rem] sm:w-[7rem] h-max text-center rounded-l-md rounded-r-md bg-gradient-to-r from-[#73735A] to-[#445A4A] text-[#fff] font-semibold newsm:py-[0.1rem] sm:py-[0.5rem] newsm:text-[0.7rem] sm:text-[1rem]"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
