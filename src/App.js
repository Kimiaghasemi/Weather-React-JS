import React from 'react'

const api = {
  key: "Token",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
     <main>
       <div className="search-box">
        <input
        type="text"
        className="search-bar"
        placeholder="Seacrh..."
        />
       </div>
     </main>
    </div>
  );
}

export default App;
