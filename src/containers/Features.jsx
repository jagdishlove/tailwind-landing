import React from "react";
import NumFeatures from "../components/Features";

const numFeatureList = [
  {
    title: "Track company-wide progress",
    number: "01",
    content:
      "See how your day-to-day tasls fit into the wide vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again",
  },
  {
    title: "advance build-in reports",
    number: "02",
    content:
      "See how your day-to-day tasls fit into the wide vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again",
  },
  {
    title: "Everything you need in one place",
    number: "03",
    content:
      "See how your day-to-day tasls fit into the wide vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again",
  },
];

const Features = () => {
  return (
    <div className="container flex flex-col justify-between items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h1 className="max-w-md font-bold text-4xl text-center md:text-start">
          What's different about Manage?
        </h1>
        <p className="mx-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col space-y-8 ">
        {numFeatureList.map((data, id) => {
          return (
            <React.Fragment key={id}>
              <NumFeatures
                number={data.number}
                title={data.title}
                content={data.content}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
