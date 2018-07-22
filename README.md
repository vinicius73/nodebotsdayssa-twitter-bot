# [NodeBotSSA Twitter Bot](https://twitter.com/nodebotssa)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/vinicius73/nodebotsdayssa-twitter-bot.svg)](https://greenkeeper.io/)

Helping Developers and share communicate in Twitter about #nodejs #nodebots #nodebotssa #johnnyfivejs.

## Index

  * [Development]()
    * [Pre-requisites](#pre-requisites)
    * [Requirements](#requirements)
    * [Starting services](#starting-services)
  * [Contributing](#contributing)
  * [Coding Guide Lines](#coding-guide-lines)
    * [Style](#style)
    * [Unit Testing](#unit-testing)
  * [MIT License](#mit-License)

## Development

### Pre-requisites

This bot uses the `twit` npm package to manipulate tweets and streams and communicate with Twitter API. You can read the [documentation](https://github.com/ttezel/twit) here.

### Requirements

- ** Node.js ** = ^6.11.2
- ** NPM ** >= 5.3.0

For work with this project you will need too:

- One Twitter account [account](https://twitter.com/signup) for testting your changes on
- API Keys for Twitter and Sentiment
  - Get your Twitter API keys [here](https://apps.twitter.com/app/new)
  - Get your Sentiment API key [here](https://market.mashape.com/vivekn/sentiment-3)
- [Fork](https://github.com/NodeBotsSalvador/nodebotsdayssa-twitter-bot) the repository
- Add API keys to `.env` file, your `.env` file should liik something like this:

```
CONSUMER_KEY=jWyxxxxxxxxxxxxxxxxxdMhxg
CONSUMER_SECRET=EcM3xxxxxxxxxxxxxxxxkFNNj1H107PFv1mvWwEM6CZH0fjymV
ACCESS_TOKEN=8968xxxxx-xxxxxxxxxxxxxxxxxxxxecKpi90bFhdsGG2N7iII
ACCESS_TOKEN_SECRET=HfYQxxxxxxxxxxxxxxxxZAU8wNKAPU8Qz2c0PhOo43cGO
```

### Starting services

```js
npm i
```

- Option 1: Nodemon mode
```js
npm run start-dev
```

- Option 2 : Test mode
```js
npm test
```

#### Stopping services

- Option 1: When the output is visible (started with option 1), just hit **`control + c`** to stop it.

## Contributing

Yes! You can help this project:

- Flagging errors
- Adding new features [issues](https://github.com/NodeBotsSalvador/nodebotsdayssa-twitter-bot/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)
- Solving existing [issues](https://github.com/NodeBotsSalvador/nodebotsdayssa-twitter-bot/labels/bug)
- Help wanted [issues](https://github.com/NodeBotsSalvador/nodebotsdayssa-twitter-bot/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
- Or just make a question [issues](https://github.com/NodeBotsSalvador/nodebotsdayssa-twitter-bot/labels/question)

New to GitHub issues? They have a pretty handy guide you can use to familiarize yourself with them or make a question.


## Coding Guide Lines

### Style
We are using **JavaScript Standard Style**:

#### The Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(`, `[`, or `` ` ``**
  - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
  - [More details][4]
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.
- **And [more goodness][5]** – *give `standard` a try today!*


### Unit Testing
Following the same structure of existing tests, the main rule it keep tests under the same namespace as the class being tested, in order to avoid useless imports and keep code cleaner

Code coverage as HTML is already ignored on git when generated on the `coverage` directory, to run tests with coverage reports, use

```js
npm test
```

## MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
