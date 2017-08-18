const {randomNumber} = require('../../libs')

const retweet = (twit, data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error(`Oops! Something is wrong, i need data for my work`))
      return
    }

    twit.post('statuses/retweet/:id', { id: randomNumber(data) }, (err, res) => {
      if (err) {
        reject(err)
        return
      }

      console.log(`UHUU!! I did a retweet :)`)
      resolve(res)
    })
  })
}

module.exports = retweet
