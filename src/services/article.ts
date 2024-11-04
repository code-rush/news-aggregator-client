import { Article } from '../types/Articles';

const API_URL = 'http://localhost:9000/news';

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  return response.json();
};

export const searchArticles = async (params: { state?: string; topic?: string; keyword?: string }): Promise<Article[]> => {
  const queryParams = new URLSearchParams();
  if (params.state) queryParams.append('state', params.state);
  if (params.topic) queryParams.append('topic', params.topic);
  if (params.keyword) queryParams.append('keyword', params.keyword);

  const response = await fetch(`${API_URL}/?${queryParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to search news');
  }
  return response.json();
};

export const getArticle = async (id: string): Promise<Article> => {
  const response = await fetch(API_URL + `/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  return response.json();
};
