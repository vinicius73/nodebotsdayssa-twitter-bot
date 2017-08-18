require('dotenv').config()

const Twit = require('twit')
const {searchTweets, retweet} = require('./actions')
const config = require('./config')

const twit = new Twit(config.twitter)

searchTweets(twit, config.queryStrings.retweet)
.then(result => retweet(twit, result.statuses))
.catch(err => console.log(err))
