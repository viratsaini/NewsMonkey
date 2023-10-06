import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SpinNer from "./SpinNer";
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps={
    country:"in",
    pagesize:18,
    category:"general"
  }
  static propTypes={
    country: PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c22f947b2b124d39a98bf1ae3a7580d1&page=1&pageSize=${this.props.pagesize}`;
      this.setState({loading:true})
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    });
  }
  previouspage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c22f947b2b124d39a98bf1ae3a7580d1&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading:false
    });
  };
  nextpage = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c22f947b2b124d39a98bf1ae3a7580d1&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center my-3">NewsMonkey-Top Hadline</h1>
        {this.state.loading &&<SpinNer/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 85) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between" >
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.previouspage}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)
              }
              type="button"
              onClick={this.nextpage}
              className="btn btn-dark">Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
