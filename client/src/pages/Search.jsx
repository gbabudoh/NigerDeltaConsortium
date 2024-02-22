import React, { useState } from 'react';
import data from '../data/data.json'; // Adjust the path as necessary
import '../scss/Search.scss'; // Import the SCSS file for styles

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleRefresh = () => {
    setSearchTerm(''); // Clear the search term
    setSearchResults([]); // Clear the search results
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>
          Search
        </button>
        <button onClick={handleRefresh} className="refresh-button">
          Refresh
        </button>
        {/* Conditional rendering based on searchResults length */}
        <div 
          className="search-results" 
          style={{ display: searchResults.length > 0 ? 'block' : 'none' }}
        >
          {searchResults.map((item) => (
            <div key={item.id} className="result-item">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
