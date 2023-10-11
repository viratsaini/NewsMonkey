import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          color: "white",
          background: "rgb(29, 29, 30)",
          border: "1px solid white",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "-2px",
            top: "-6px",
          }}
        >
          <span className=" top-0 badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://static.toiimg.com/thumb/msid-102807302,width-1070,height-580,imgsize-583333,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
          }
          className="card-img-top"
          alt="..."
          style={{ borderRadius: "4px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toDateString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
