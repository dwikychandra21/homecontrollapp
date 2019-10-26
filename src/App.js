import React from 'react';
import logo from './logo.svg';
import './App.css';
import RemoteControl from './components/RemoteControl';
import DwikyChandraCard from './components/DwikyChandraCard';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <RemoteControl />
      <DwikyChandraCard />
    </div>
  );
}

export default App;
