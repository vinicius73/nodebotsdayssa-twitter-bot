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

      console.log(`UHUU!! I did a retweet: ${res.id_str} ${res.created_at} ${res.text}`)
      resolve(res)
    })
  })
}

const runRetweet = (twit, queryStrings) => {
  searchTweets(twit, queryStrings)
  .then(result => retweet(twit, result.statuses))
  .catch(err => console.log(err))
}

module.exports = runRetweet
