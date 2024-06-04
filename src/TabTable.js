// TabTable.js
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import React, { useState, useEffect } from 'react';

function TabTable({ jsonData }) {
  const [activeTab, setActiveTab] = useState(null);
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    console.log(Object.keys(jsonData));
    const defaultTab = Object.keys(jsonData)[0]
    setActiveTab(defaultTab);
    setTabData(jsonData[defaultTab] || []);
  }, [jsonData]);


  const handleTabClick = (tabName) => {
    console.log(tabName)
    setActiveTab(tabName); // Reset subtab index when changing tabs
    setTabData(jsonData[tabName] || []);
  };

  return (
    <div className="tab-table">
      <div className="tab-list">
        {jsonData && Object.keys(jsonData).map((tabName) => (
          <button
            key={tabName}
            onClick={() => handleTabClick(tabName)}
            className={activeTab === tabName ? 'active' : ''}
          >
            {tabName}
          </button>
        ))}
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(tabData).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
		    <JsonView src={value} />
		</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default TabTable;
