const randomNumber = (data) => {
  const index = Math.floor(Math.random() * data.length)
  return data[index]
}

module.exports = randomNumber
