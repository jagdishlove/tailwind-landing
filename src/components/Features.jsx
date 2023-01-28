import React from "react";

const Features = ({ title, number, content }) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 ">
      <div className="flex flex-row space-x-4 px-4 py-2 items-center">
        <p className="px-4 py-2 text-white font-semibold text-2xl rounded-full bg-brightRed md:py-1 ">
          {number}
        </p>
        <h2 className="font-bold text-base ">{title}</h2>
      </div>
      <p className="mx-w-sm text-center text-darkGrayishBlue md:text-left md:w-1/2">
        {content}
      </p>
    </div>
  );
};

export default Features;
