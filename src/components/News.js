import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import SpinNer from "./SpinNer";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticlest] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const componentDidMount = async () => {
    props.setProgress(10);
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pagesize}`;
    // setaloading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parseddata = await data.json();
    props.setProgress(60);
    setarticlest(parseddata.articles);
    setloading(false);
    settotalResults(parseddata.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    componentDidMount();
    //eslint-disable-next-line
  }, []);
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}
      &pageSize=${props.pagesize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticlest(articles.concat(parseddata.articles));
    // setaloading(false);
    settotalResults(parseddata.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        NewsMonkey-Top {props.category} Headlines
      </h1>

      {loading && <SpinNer />}
      <InfiniteScroll
        dataLength={9}
        next={fetchMoreData}
        hasMore={9 < totalResults}
        // loader={<SpinNer />}
      >
        <div className="container">
          <div className="row">
            {articles &&articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
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
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 18,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
