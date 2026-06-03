
import profileImg from "./assets/profile.png";

function Card() {
  return (
    <>
      <div className="flex items-center justify-center bg-[#d2d6db] w-full p-4 min-h-screen">
        <div className=" bg-white p-6 flex flex-col items-center gap-6 w-full border border-transparent h-auto rounded-xl sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
          <div className="profile-name flex items-center gap-5 w-full">
            <img className="w-[15%]" src={profileImg} alt="profile-img" />
            <div className="profile-name">
              <h2 className="text-lg font-semibold">Sarah Dole</h2>
              <span className="text-[#525252]">@Sarahdole</span>
            </div>
          </div>
         <div className="profile-info flex items-center w-full">
          <p className="text-[#525252]">
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </div>
        </div>
      </div>
    </> 
  );
}

export default Card;
