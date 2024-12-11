// src/components/PetSearch.jsx
import { useState } from 'react';

function PetSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/pets?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Error fetching pets');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error.message);
      setResults([]);
    }
  };

  return (
    <div>
      <h2>Search for Pets</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter pet name or type"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.length === 0 && <li>No pets found</li>}
        {results.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetSearch;
