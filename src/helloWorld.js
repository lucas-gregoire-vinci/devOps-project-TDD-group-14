function greet (names) {
  const defaultValue = 'Hello, my friend.'
  let defaultValueArray = 'Hello, '
  const defaultValueUppercase = 'HELLO, '

  if (Array.isArray(names)) {
    if (names.length === 1) {
      defaultValueArray += names[0] + '.'
    } else {
      const ttSaufDernier = names.slice(0, -1)
      const last = names.slice(-1)
      defaultValueArray += ttSaufDernier.join(', ') + ' and ' + last + '.'
    }
    return defaultValueArray
  }

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
