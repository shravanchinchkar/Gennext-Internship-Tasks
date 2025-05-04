export const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-[1rem] items-center text-[#fff] font-semibold newsm:text-[0.7rem] sm:text-[1.1rem]">
      <h1>Let's Connect 🤝</h1>

      <div className="w-[100%] flex items-center justify-evenly">
        <div className="newsm:w-[2.5rem] newsm:h-[2.5rem] sm:w-[3rem] sm:h-[3rem] bg-gradient-to-r from-[#73735A] to-[#445A4A] rounded-full flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/shravan-chinchkar-308010250/"
            target="_blank"
          >
            <img
              className="w-[100%] h-[100%]"
              src="./assets/images/linkedIn.svg"
              alt="LinkedIn"
            />
          </a>
        </div>

        <div className="newsm:w-[2.5rem] newsm:h-[2.5rem] sm:w-[3rem] sm:h-[3rem] bg-gradient-to-r from-[#73735A] to-[#445A4A] rounded-full flex justify-center items-center">
          <a
            href="https://www.instagram.com/_shravanchinchkar_?igsh=MXdjZWtwdjVzc2luaw=="
            target="_blank"
          >
            <img
              className="w-[100%] h-[100%]"
              src="./assets/images/instagram.svg"
              alt="insta"
            />
          </a>
        </div>

        <div className="newsm:w-[2.5rem] newsm:h-[2.5rem] sm:w-[3rem] sm:h-[3rem] bg-gradient-to-r from-[#73735A] to-[#445A4A] rounded-full flex justify-center items-center">
          <a href="https://x.com/_shravan26_" target="_blank">
            <img
              className="w-[100%] h-[100%]"
              src="./assets/images/x.svg"
              alt="x"
            />
          </a>
        </div>

        <div className="newsm:w-[2.5rem] newsm:h-[2.5rem] sm:w-[3rem] sm:h-[3rem] bg-gradient-to-r from-[#73735A] to-[#445A4A] rounded-full flex justify-center items-center">
          <a href="https://github.com/shravanchinchkar" target="_blank">
            <img
              className="w-[100%] h-[100%]"
              src="./assets/images/github.svg"
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
