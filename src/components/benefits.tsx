import React from "react";
import Container from "./container";
import SectionHeading from "./sectionHeading";

interface Benefit {
  title: string;
  desc: string;
}

const benefits = [
  {
    title: "Enhanced sleep quality",
    desc: "Take one or two an hour before going to bed.",
  },
  {
    title: "Reduced inflammation",
    desc: "Take before or immediately after physical activity for inflammation- and pain-reducing effects.",
  },
  {
    title: "Improved focus",
    desc: "Take one in the morning and another midday to help your mind focus on important tasks.",
  },
  {
    title: "Boosted athletic performance",
    desc: "Take for pre-workout preparation and post-workout recovery.",
  },
];

const Benefits = (): JSX.Element => {
  return (
    <Container>
      <SectionHeading title="Benefits of CBD Gummies" />
      <div className="grid grid-cols-4 gap-4 mt-6 mb-24">
        {benefits.map((benefit: Benefit) => (
          <div className="flex flex-col p-8 bg-primary rounded shadow">
            <h4 className="text-xl text-white">{benefit.title}</h4>
            <hr className="border border-gray-300 my-3 w-2/3" />
            <p className="text-gray-200">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Benefits;
