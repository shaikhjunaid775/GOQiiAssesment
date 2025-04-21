// components/ProfileTab.jsx
import React, { useState } from "react";

const ProfileTab = ({ data, setData, next }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!data.name || data.name.length < 3)
      errs.name = "Name must be at least 3 characters";
    if (!data.age || isNaN(data.age) || Number(data.age) < 18)
      errs.age = "Age must be a number and at least 18";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Invalid email";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validate()) next();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={`mt-1 block w-full rounded-md border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } shadow-sm px-3 py-2`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          placeholder="Age"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
          className={`mt-1 block w-full rounded-md border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } shadow-sm px-3 py-2`}
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={`mt-1 block w-full rounded-md border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } shadow-sm px-3 py-2`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

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
  );
};

export default ProfileTab;
