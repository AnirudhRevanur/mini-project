import React, { useState } from "react";
import Instruction from "./Instruction";

interface Tab {
  [tabName: string]: string[];
}

const tabData: Tab = {
  Tab1: ["Instruction 1", "Instruction 2"],
  Tab2: ["Instruction 3", "Instruction 4"],
};

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <div className="h-full flex flex-col text-black">
      <div className="flex border-2 bg-white">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 text-center ${activeTab === tab ? "border-2 text-red-500" : ""
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {tabData[activeTab].map((instruction) => (
          <Instruction key={instruction} name={instruction} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
