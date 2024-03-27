// TabTable.js
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import React, { useState, useEffect } from 'react';

function TabTable({ jsonData }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const defaultTab = Object.keys(jsonData[0])[0];
    setActiveTabIndex(0);
    setActiveSubTab(defaultTab);
    setTabData(jsonData[0][defaultTab] || []);
  }, [jsonData]);


  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    const defaultTab = Object.keys(jsonData[index])[0];
    setActiveSubTab(defaultTab); // Reset subtab index when changing tabs
    setTabData(jsonData[index][defaultTab] || []);
  };

  const handleSubTabClick = (index, tabName) => {
    setActiveTabIndex(index);
    setActiveSubTab(tabName);
    console.log(tabName)
    setTabData(jsonData[index][tabName] || []);
  };

  return (
    <div className="tab-table">
      <div className="tab-list">
        {jsonData.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTabIndex === index ? 'active' : ''}
          >
	    {`[appliance] ${jsonData[index]['summary']['hostname']}`}
          </button>
        ))}
      </div>
      <div className="subtab-list">
        {jsonData[activeTabIndex] && Object.keys(jsonData[activeTabIndex]).map((subTab, tabName) => (
          <button
            key={subTab}
            onClick={() => handleSubTabClick(activeTabIndex, subTab)}
            className={activeSubTab === subTab ? 'active' : ''}
          >
            {subTab}
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
