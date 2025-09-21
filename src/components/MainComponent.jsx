import React, { useState } from 'react';
import Profile from "./TabsComponents/Profile";
import Intrests from "./TabsComponents/Intrests";
import Settings from "./TabsComponents/Settings";

let Tabs = ["Profile", "Intresets", "Settings"]

function MainComponent() {
  const [activeTab, setActiveTab] = useState("Profile")

  return (
    <div className='parent-container'>
      <div className="tabs-container">
        {Tabs.map(singleTab => (
          <div
            key={singleTab} // always add key when mapping
            className={`single-tab ${activeTab === singleTab ? "active-tab" : ""}`}
            onClick={() => setActiveTab(singleTab)}
          >
            {singleTab}
          </div>
          
        ))}
      </div>
      <div className='tab-content'>
        {activeTab === "Profile" && <Profile />}
        {activeTab === "Intresets" && <Intrests />}
        {activeTab === "Settings" && <Settings />}
      </div>
    </div>
  );
}

export default MainComponent;
