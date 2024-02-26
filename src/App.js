import React from 'react';
import ChampionCard from './Champion_Card';
import Champion_Data from './Champion_Data'; // Make sure to adjust the import path based on your folder structure

function App() {
  return (
    <div className="App">
      <div className="champion-grid">
        {Champion_Data.map((champion, index) => (
          <ChampionCard key={index} champion={champion} />
        ))}
      </div>
    </div>
  );
}

export default App;
