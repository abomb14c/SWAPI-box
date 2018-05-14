import React from 'react';
import './crawlText.css';

export const CrawlText = ({data}) => {
  return (
    <section className="crawl-section">
      <div className="crawl-div">
        <p>{data.crawlText}</p>
        <div className="title">
          <h5>{data.title}</h5>
          <h5>{data.release}</h5>   
        </div>
      </div>
    </section>
  );
};

