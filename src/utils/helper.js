
 const getCrawlText= (data) => {
  const results = data.results.map(result => {
    return {
       crawlText: result.opening_crawl, 
       title: result.title,
       release: result.release_date
    }
  })
  return getRandom(results)
}

const getRandom= (results) => {
    return results[Math.floor(Math.random()*results.length)]
}


export  {getCrawlText

}