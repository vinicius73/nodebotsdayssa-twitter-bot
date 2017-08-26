const { isEmpty } = require('lodash')
const { randomNumber } = require('../../libs')
const searchTweets = require('./search_tweets')

const getRetweetId = (data) => {
  const indexNumber = randomNumber(data.length)
  return data[indexNumber].id_str
}

const retweet = (twit, id) => {
  return new Promise((resolve, reject) => {
    if (isEmpty(id)) {
      reject(new Error(`Oops! Something is wrong, i need id for my work`))
      return
    }

    twit.post('statuses/retweet/:id', { id }, (err, res) => {
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
    .then(result => result.statuses)
    .then(data => {
      if (isEmpty(data)) {
        return Promise.reject(new Error('Opps! No tweet to retweet'))
      }
      return retweet(twit, getRetweetId(data))
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
