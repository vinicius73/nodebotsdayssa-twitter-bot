const search = (twit, queryString) => {
  return new Promise((resolve, reject) => {
    twit.get('search/tweets', queryString, (err, data) => {
      if (err) {
        reject(err)
        return
      }

      resolve(data)
    })
  })
}

module.exports = search
