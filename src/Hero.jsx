import { useState } from 'react';

function Hero() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", keyword, category);
  };

  return (
    <div className="hero-section">
      <h1>Connecting the Global Renewable<br/>Energy Events</h1>
      <p>Easy to search, you just enter the keyword</p>

      <div className="search-box">
        <input 
          type="text" 
          placeholder="Event name..." 
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Event Category</option>
          <option value="business">Business</option>
          <option value="conference">Conference</option>
        </select>

        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;