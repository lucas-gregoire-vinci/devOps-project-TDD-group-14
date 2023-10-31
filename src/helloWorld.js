function greet (names) {
  if (names === null || names === undefined || names === "") return 'Hello, my friend.'

  return `Hello, ${names}.`
}

module.exports = { greet }
