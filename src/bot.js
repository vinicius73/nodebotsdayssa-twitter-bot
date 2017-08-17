require('dotenv').config()

const Twit = require('twit')
const {searchTweets} = require('./actions')

const TIME_OUT_MILESECONDS = 900000

const twit = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: TIME_OUT_MILESECONDS
})

searchTweets(twit, {
  q: '#nodejs, #Nodejs',
  result_type: 'recent',
  lang: 'en'
})
.then(result => console.log(result))
.catch(err => console.log(err))
