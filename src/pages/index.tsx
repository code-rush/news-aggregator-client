import React, { useState, useEffect } from 'react';
import { fetchArticles, searchArticles } from '../services/article';
import ArticleCard from '../components/Article';
import SearchBar from '../components/SearchBar';
import { Article } from '../types/Articles';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (params?: { state?: string; topic?: string; keyword?: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = params ? await searchArticles(params) : await fetchArticles();
      setArticles(data);
    } catch (err) {
      setError('Failed to fetch articles');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (params: { state?: string; topic?: string; keyword?: string }) => {
    fetchData(params);
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">News Aggregator</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((item) => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>
    </div>
  );
}
