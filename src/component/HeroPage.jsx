import React from "react";

const HeroPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-full p-5">
        <div className="w-full p-10 flex justify-baseline items-center">
          <div>
            <h3 className="font-bold text-2xl animate-bounce">
              Hey,I'm Umesh🖖
            </h3>
            <h1 className="text-7xl font-extrabold">
              <span className="text-violet-700">Fullstack</span>
              <br />
              Developer
            </h1>
            <div className="py-4 text-lg">
              <p>
                I'm Fullstack web developer based in nepal, I'll help you to
                build beautiful, safe , secure and responsive website your user
                will love.
              </p>
            </div>
            <div className="flex p-1 gap-3">
              <div>
                <button className="px-4 py-2 bg-black text-white rounded-lg shadow-lg shadow-gray-400 cursor-pointer relative  hover:top-1">
                  Get in touch
                </button>
              </div>
              <div>
                <button className="px-4 py-2 bg-gray-300 text-black border-2 border-gray-100 rounded-lg shadow-lg shadow-gray-300 cursor-pointer font-bold relative hover:top-1">
                  Browse project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
