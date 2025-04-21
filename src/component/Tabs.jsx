import React from "react";
import ProfileTab from "./ProfileTab";
import InterestsTab from "./InterestsTab";
import SettingsTab from "./SettingsTab";

const Tabs = ({ activeTab, setActiveTab, formData, setFormData, onSubmit }) => {
  const tabTitles = ["Profile", "Interests", "Settings"];

  const validators = [
    () => true, // Tab 0 (Profile) - always accessible
    () => validateProfile(),
    () => validateProfile() && validateInterests(),
  ];

  const validateProfile = () => {
    const { name, age, email } = formData.profile;
    const errors = {};

    if (!name || name.length < 3)
      errors.name = "Name must be at least 3 characters";
    if (!age || isNaN(age) || Number(age) < 18)
      errors.age = "Age must be a number and at least 18";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Invalid email";

    return Object.keys(errors).length === 0;
  };

  const validateInterests = () => {
    const interests = formData.interests || [];
    return interests.length > 0;
  };

  const handleTabClick = (index) => {
    if (!validators[index]()) {
      alert("Please complete previous steps before accessing this tab.");
      return;
    }
    setActiveTab(index);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 0:
        return (
          <ProfileTab
            data={formData.profile}
            setData={(d) => setFormData({ ...formData, profile: d })}
            next={() => handleTabClick(1)}
          />
        );
      case 1:
        return (
          <InterestsTab
            data={formData.interests}
            setData={(d) => setFormData({ ...formData, interests: d })}
            next={() => setActiveTab(2)}
            prev={() => setActiveTab(0)}
          />
        );
      case 2:
        return (
          <SettingsTab
            data={formData.settings}
            setData={(d) => setFormData({ ...formData, settings: d })}
            prev={() => setActiveTab(1)}
            onSubmit={onSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap mb-3">
        {tabTitles.map((title, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`w-100 inline-flex items-center h-10 px-2 py-2 -mb-px bg-transparent sm:px-4 -px-1 whitespace-nowrap focus:outline-none 
              ${
                activeTab === index
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : ""
              }
            `}
          >
            {title === "Profile" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </>
            ) : title === "Interests" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </>
            )}
            <span className="mx-1 text-sm sm:text-base">{title}</span>
          </button>
        ))}
      </div>
      {renderTab()}
    </>
  );
};

export default Tabs;
