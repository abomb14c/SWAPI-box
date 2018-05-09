import React from 'react'

export const CrawlText = ({data}) => {
    return (
        <div>
         <h3>{data.crawlText}</h3>
         <h5>{data.title}</h5>
         <h5>{data.release}</h5>   
        </div>
    );
}
