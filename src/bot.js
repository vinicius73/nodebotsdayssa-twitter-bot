require('dotenv').config()

const Twit = require('twit')
const {retweet} = require('./actions')
const config = require('./config')

console.log(config.twitter)
const twit = new Twit(config.twitter)
const TIME_WAIT_FOR_RETWEET_MILESECONDS = 900000

const runRetweet = () => {
  retweet(twit, config.queryStrings.retweet)
}
runRetweet()
setInterval(runRetweet, TIME_WAIT_FOR_RETWEET_MILESECONDS)
