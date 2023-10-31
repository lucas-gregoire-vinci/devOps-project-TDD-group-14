function greet (names) {
  const defaultValue = 'Hello, my friend.'
  if (names === null || names === undefined || names === '') { return defaultValue }

  return `Hello, ${names}.`
}

module.exports = { greet }
