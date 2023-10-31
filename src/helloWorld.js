function greet (name) {
  const defaultValue = 'Hello, my friend.'

  if (!nameIsValid(name)) {
    return defaultValue
  }

  return `Hello, ${name}.`
}

function nameIsValid (name) {
  if (name === null || name === undefined || name === '') return false
  else return true
}

module.exports = { greet }
