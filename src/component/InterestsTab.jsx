// components/InterestsTab.jsx
import React, { useState } from "react";

const INTERESTS = ["Music", "Sports", "Tech", "Art", "Travel"];

const InterestsTab = ({ data, setData, next, prev }) => {
  const [error, setError] = useState("");

  const toggleInterest = (interest) => {
    const newInterests = data.includes(interest)
      ? data.filter((i) => i !== interest)
      : [...data, interest];
    setData(newInterests);
  };

  const handleNext = () => {
    if (data.length === 0) {
      setError("Select at least one interest");
    } else {
      setError("");
      next();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {INTERESTS.map((interest) => (
          <button
          key={interest}
          className={`px-4 py-1 rounded-full border transition-all duration-300 ease-in-out transform hover:scale-105 font-medium shadow-sm
            ${
              data.includes(interest)
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          onClick={() => toggleInterest(interest)}
        >
          {interest}
        </button>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-between">
        <button
          className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-lg cursor-pointer font-semibold group"
          type="button"
          onClick={prev}
        >
          <div className="bg-sky-300 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path
                  strokeDasharray={16}
                  strokeDashoffset={16}
                  d="M19 12h-13.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="16;0"
                  ></animate>
                </path>
                <path
                  strokeDasharray={10}
                  strokeDashoffset={10}
                  d="M5 12l5 5M5 12l5 -5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.2s"
                    values="10;0"
                  ></animate>
                </path>
              </g>
            </svg>
          </div>
          <p className="translate-x-2">Back</p>
        </button>

        <button
          className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-lg cursor-pointer font-semibold group"
          type="button"
          onClick={handleNext}
        >
          <div className="bg-sky-300 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path strokeDasharray={16} strokeDashoffset={16} d="M5 12h13.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="16;0"
                  ></animate>
                </path>
                <path
                  strokeDasharray={10}
                  strokeDashoffset={10}
                  d="M19 12l-5 5M19 12l-5 -5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.2s"
                    values="10;0"
                  ></animate>
                </path>
              </g>
            </svg>
          </div>
          <p className="translate-x-2">Next</p>
        </button>
      </div>
    </div>
  );
};

export default InterestsTab;
