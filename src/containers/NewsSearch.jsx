import React, { Component } from 'react';
import Search from '../components/news/Search';
import ArticleList from '../components/news/ArticleList';
import { fetchArticlesByTitle, fetchArticles } from '../services/newsApi';
import '../components/styles/News.css';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    articleTitle: '',
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }

  handleArticleTitleChange = (event) => {
    this.setState({ articleTitle: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchArticlesByTitle(this.state.articleTitle);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articles, articleTitle } = this.state;

    if(loading) return <p>Loading</p>;
    return (
      <div>
        <Search
          articleTitle={articleTitle}
          onArticleTitleChange={this.handleArticleTitleChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
