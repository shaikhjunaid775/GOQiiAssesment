// components/Summary.jsx
import React from "react";

const Summary = ({ formData, setIsSubmitted  }) => {
    
    
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          viewBox="0 0 24 24"
          className="stroke-green-500"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
          ></path>
        </svg>
        {/* <CheckCircle2 className="w-12 h-12 text-green-500" /> */}
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">
        Submission Summary
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Profile Information</h3>
          <dl className="grid grid-cols-2 gap-2">
            <dt className="font-medium">Name:</dt>
            <dd>{formData.profile.name}</dd>
            <dt className="font-medium">Age:</dt>
            <dd>{formData.profile.age}</dd>
            <dt className="font-medium">Email:</dt>
            <dd>{formData.profile.email}</dd>
          </dl>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Selected Interests</h3>
          <div className="flex flex-wrap gap-2">
            {formData.interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p>
            Notifications:{" "}
            {formData.settings.notifications ? "Enabled" : "Disabled"}
          </p>
        </div>
        <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Edit Information
          </button>
        
      </div>
    </div>
  );
};

export default Summary;
