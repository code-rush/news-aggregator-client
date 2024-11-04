import React, { useEffect, useState } from 'react'
import { getArticle } from '../../services/article';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Article } from '../../types/Articles';


const ArticleDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      fetchData(id as string);
    }
  }, [id]);

  const fetchData = async (articleId: string) => {
    try {
      const data = await getArticle(articleId);
      setArticle(data);
    } catch (err) {
      setError('Error fetching article')
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="container mx-auto px-4 py-8">Loading...</div>
  if (error) return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>
  if (!article) return <div className="container mx-auto px-4 py-8">Article not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to News List
      </Link>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="mb-4 text-gray-600">
        <p>State: {article.state}</p>
        <p>Topic: {article.topic}</p>
        <p>Published: {new Date(article.published_on).toLocaleDateString()}</p>
        <p>Source: {article.source}</p>
      </div>
      <p className="mb-4">{article.description}</p>
      <div className="mb-4">
        {/* Add more content here if available in your Article */}
        <p>Full article content would go here...</p>
      </div>
      <a 
        href={article.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
      >
        Read Original Article
      </a>
    </div>
  );
};

export default ArticleDetail;
