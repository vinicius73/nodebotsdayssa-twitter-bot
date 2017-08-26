const test = require('ava')
const _ = require('lodash')

const searchTweets = require('../../../actions/twitter/search_tweets')
const resultMocked = require('../../mock/search_mock')

test('Should execute a search and return result', t => {
  const queryString = {
    q: '#nodebots',
    result_type: 'recent',
    count: 100
  }

  const twit = {
    get: (path, query, cb) => {
      t.true(_.isString(path))
      t.true(_.isObject(query))
      t.is(query, queryString)
      t.true(_.isFunction(cb))

      cb(null, resultMocked)
    }
  }

  return searchTweets(twit, queryString)
    .then(result => {
      t.deepEqual(result, resultMocked)
    })
    .catch(err => {
      t.fail()
    })
})

test('Should execute a search and return a error', t => {
  const queryString = {
    q: '#nodebots',
    result_type: 'recent',
    count: 100
  }

  const erroMocked = {
    'status': 'error',
    'message': 'Unable to communicate with Twitter'
  }

  const twit = {
    get: (path, query, cb) => {
      cb(erroMocked, null)
    }
  }

  return searchTweets(twit, queryString)
    .then(result => {
      t.fail()
    })
    .catch(err => {
      t.deepEqual(err, erroMocked)
    })
})
