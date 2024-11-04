import React from 'react';
import Link from 'next/link';
import { Article } from '../types/Articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-2">{article.description.substring(0, 100)}...</p>
      <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 mb-2">
        <span>State: {article.state}</span>
        <span>Topic: {article.topic}</span>
        <span>Published: {formatDate(article.published_on)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{article.source}</span>
        <Link 
          href={{
            pathname: `/article/${article.id}`,
          }}
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
