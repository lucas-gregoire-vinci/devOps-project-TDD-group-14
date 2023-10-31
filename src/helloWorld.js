function greet (name) {
  const defaultValue = 'Hello, my friend.'
  const defaultValueUppercase = 'HELLO, '

  if (!nameIsValid(name)) {
    return defaultValue
  }

  if (nameIsInUppercase(name)) return `${defaultValueUppercase}${name}!`

  return `Hello, ${name}.`
}

function nameIsValid (name) {
  if (name === null || name === undefined || name === '') return false
  else return true
}

function nameIsInUppercase (name) {
  if(name === name.toUpperCase()) return true;
  return false
}

module.exports = { greet }
