function greet (names) {
  const defaultValue = 'Hello, my friend.'
  const defaultValueArray = 'Hello, '
  const defaultValueUppercase = 'HELLO, '

  if (Array.isArray(names)) { return `${defaultValueArray}${names[0]} and ${names[1]}.` }

  if (!nameIsValid(names)) {
    return defaultValue
  }

  if (nameIsInUpperCase(names)) return `${defaultValueUppercase}${names}!`

  return `Hello, ${names}.`
}

function nameIsValid (name) {
  if (name === null || name === undefined || name === '') return false
  else return true
}

function nameIsInUpperCase (name) {
  if (name === name.toUpperCase()) return true
  return false
}

module.exports = { greet }
