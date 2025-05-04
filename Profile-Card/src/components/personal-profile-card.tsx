import { Hobbies } from "./hobbies-section";
import { SocialMedia } from "./social-media";

export const PersonalProfileCard = () => {
  return (
    <div className="newsm:w-[17rem] newsm:h-[20rem] sm:w-[30rem] sm:h-[35rem] bg-gradient-to-r from-[#B0BF78] to-[#759D61] rounded-xl shadow-xl flex flex-col newsm:gap-[0.5rem] sm:gap-[1rem] overflow-hidden">
      {/* Profile Image */}
      <div className="h-[35%] flex justify-center items-center">
        <div className="newsm:w-[5rem] newsm:h-[5rem] sm:w-[10rem] sm:h-[10rem] rounded-full overflow-hidden shadow-xl">
          <img
            src="./assets/images/image-placeholder.png"
            alt="image-placeholder"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>

      <div className="h-[65%] flex flex-col item-center newsm:gap-[0.2rem] sm:gap-[1rem] font-[Poppins] newsm:px-[0.2rem] sm:px-[1rem]">
        {/* Self Description */}
        <div className="h-max text-center text-[#fff] font-normal newsm:text-[0.6rem] sm:text-[1.1rem]">
          <p>
            Hello, My Name is{" "}
            <span className="font-semibold hover:text-[#3E7B27]">
              Shravan Ajit Chinchkar
            </span>
          </p>
          <p>I am a last year BE Student from </p>
          <p>
            {" "}
            <span className="font-semibold">
              PDEA's College Of Engineering,Manjari(Bk.),Pune
            </span>
          </p>
        </div>
        {/* Hobbies Section */}
        <Hobbies />
        {/* Social Media Account */}
        <SocialMedia />
      </div>
    </div>
  );
};
