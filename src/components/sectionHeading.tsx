import React from "react";

interface SectionHeading {
  title: string;
}

const SectionHeading = ({ title }: SectionHeading) => {
  return (
    <div>
      <h2 className="text-3xl text-800 tracking-wider">{title}</h2>
      <hr className="border border-gray-200 w-2/3 my-3" />
    </div>
  );
};

export default SectionHeading;
