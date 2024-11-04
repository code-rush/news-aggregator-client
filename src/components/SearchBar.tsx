import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (params: { state?: string; topic?: string; keyword?: string }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'state' | 'topic' | 'keyword'>('keyword');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = { [searchType]: query };
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex mb-2">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value as 'state' | 'topic' | 'keyword')}
          className="mr-2 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="state">State</option>
          <option value="topic">Topic</option>
          <option value="keyword">Keyword</option>
        </select>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search by ${searchType}`}
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
