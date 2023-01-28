import React from "react";
import illustration from "../assets/images/illustration-intro.svg";

const BringEveryoneTogether = () => {
  return (
    <div
      className="container flex flex-col-reverse justify-between
    items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row "
    >
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring everyone together to build better products.
        </h1>
        <p className="mx-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the large ream goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className=" hover:bg-brightRedLight p-3 px-6 pt-2 text-white bg-brightRed font-semibold ">
            Get Start
          </button>
        </div>
      </div>
      <div>
        <img src={illustration} alt="bringTogether" />
      </div>
    </div>
  );
};

export default BringEveryoneTogether;
