require('dotenv').config()

const Twit = require('twit')
const {retweet} = require('./actions')
const config = require('./config')

const twit = new Twit(config.twitter)

retweet(twit, config.queryStrings.retweet)
setInterval(retweet, config.twitter.timeout_ms)
