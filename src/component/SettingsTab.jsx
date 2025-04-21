// components/SettingsTab.jsx
import React from "react";

const SettingsTab = ({ data, setData, prev, onSubmit }) => {
  return (
    <div className="space-y-4">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={data.notifications}
          onChange={(e) => setData({ notifications: e.target.checked })}
        />
        <span>Enable Notifications</span>
      </label>

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
          onClick={onSubmit}
          class="overflow-hidden  w-32 p-2 h-12 bg-black/80 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
        >
          Submit
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
          <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Submit
          </span>
        </button>
      </div>
    </div>
  );
};

export default SettingsTab;
