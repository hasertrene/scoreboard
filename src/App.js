import React, { useState } from 'react';
import './App.scss';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard/Scoreboard';


function App() {
  return (
      <div>
      <header>
        <Title />
      </header>
      <main>
        <Scoreboard />
      </main>
      </div>
  );
}

export default App;
