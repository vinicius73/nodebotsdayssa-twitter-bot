const {randomNumber} = require('../../libs')
const searchTweets = require('./search_tweets')

const getRetweetId = (data) => {
  const indexNumber = randomNumber(data)
  return data[indexNumber].id_str
}

const retweet = (twit, data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error(`Oops! Something is wrong, i need data for my work`))
      return
    }

    twit.post('statuses/retweet/:id', { id: getRetweetId(data) }, (err, res) => {
      if (err) {
        reject(err)
        return
      }

      resolve(res)
    })
  })
}

const searchAndRetweet = (twit, queryStrings) => {
  return searchTweets(twit, queryStrings)
    .then(result => {
      retweet(twit, result.statuses)
        .then(rt => {
          console.log(`UHUU!! I did a retweet: ${rt.id_str} ${rt.created_at} ${rt.text}`)
          return Promise.resolve(rt)
        })
    })
    .catch(err => {
      console.log(err, new Date())
      return Promise.reject(err)
    })
}

module.exports = searchAndRetweet
