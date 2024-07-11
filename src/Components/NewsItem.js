import React from "react";

const NewsItem =(props) => {
  
    let {title,description,imageUrl,newsUrl,author,date,page} = props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl ? imageUrl : "https://c.ndtvimg.com/2024-07/sja468kg_kulgam-encounter_625x300_06_July_24.jpg" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
