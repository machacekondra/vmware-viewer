// App.js
import React from 'react';
import './App.css';
import TabTable from './TabTable';
import jsonData from './data/data.json';

function App() {
  return (
    <div className="App">
      <center><h1>VMware info</h1></center>
      <TabTable jsonData={jsonData} />
    </div>
  );
}

export default App;
