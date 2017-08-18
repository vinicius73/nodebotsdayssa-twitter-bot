require('dotenv').config()

const Twit = require('twit')
const {searchTweets} = require('./actions')
const config = require('./config')

const twit = new Twit(config.twitter)

searchTweets(twit, config.queryStrings.retweet)
.then(result => console.log(result))
.catch(err => console.log(err))
