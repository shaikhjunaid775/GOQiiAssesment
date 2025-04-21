import React, { useState } from 'react';
import Tabs from './component/Tabs';
import Summary from './component/Summary';

export default function App() {
  const [formData, setFormData] = useState({
    profile: { name: '', age: '', email: '' },
    interests: [],
    settings: { notifications: false },
  });
  const [activeTab, setActiveTab] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="max-w-xl mx-auto p-4">
      
      {!isSubmitted ? (
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formData={formData}
          setFormData={setFormData}
          onSubmit={() => setIsSubmitted(true)}
        />
      ) : (
        <Summary formData={formData} setIsSubmitted={setIsSubmitted} />
      )}
    </div>
  );
}
