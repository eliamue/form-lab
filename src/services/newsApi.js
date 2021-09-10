export const formatArticles = (json) =>
  json.articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description
  }));

export const fetchArticles = async () => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dbd0e127d865484e89ba1f1171627bfb'
  );
  const json = await res.json();

  return formatArticles(json);
};

export const fetchArticlesByTitle = async (articleTitle) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://newsapi.org/v2/everything?qInTitle=${articleTitle}&apiKey=dbd0e127d865484e89ba1f1171627bfb`
  );
  const json = await res.json();

  return formatArticles(json);
};
