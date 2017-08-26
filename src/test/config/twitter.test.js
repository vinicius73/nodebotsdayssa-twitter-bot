const test = require('ava')

const twitterConfig = require('../../config/twitter')

test('should return a objet with twitter API token keys', (t) => {
  t.is(typeof twitterConfig, 'object', 'is defined and is a object')
})
