export const formatArticles = (json) =>
  json.articles.map((article) => ({
    title: article.title,
    author: article.author,
    description: article.description,
  }));

export const fetchArticles = async () => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
  const json = await res.json();

  return formatArticles(json);
};

export const fetchArticlesByTitle = async (articleTitle) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://newsapi.org/v2/everything?qInTitle=${articleTitle}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
  const json = await res.json();

  return formatArticles(json);
};
