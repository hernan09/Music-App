import "./App.css";
import Header from "./Components/Search/search.js";
import AudioPlayer from './Components/Player/AudioPLayer.js'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/audio/:trackId" element={<AudioPlayer/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
