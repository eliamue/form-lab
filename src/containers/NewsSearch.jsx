import React, { Component } from 'react';
import Controls from '../components/news/Controls';
import NewsList from '../components/news/NewsList';
import { fetchNewsArticleByTitle, fetchArticles } from '../services/newsApi';

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
    const articles = await fetchNewsArticleByTitle(this.state.articleTitle);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articles, articleTitle } = this.state;

    if(loading) return <p>Loading</p>;
    return (
      <div>
        <Controls
          articleTitle={articleTitle}
          onArticleTitleChange={this.handleArticleTitleChange}
          onSubmit={this.handleSubmit}
        />
        <NewsList articles={articles} />
      </div>
    );
  }
}
