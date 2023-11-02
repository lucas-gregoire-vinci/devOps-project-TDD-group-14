function greet (names) {
  const defaultValue = 'Hello, my friend.'
  let defaultValueArray = 'Hello, '
  let defaultValueUppercase = 'HELLO, '

  if (Array.isArray(names)) {
    const normalNames = []
    const upperNames = []

    for (let i = 0; i < names.length; i++) {
      if (nameIsInUpperCase(names[i])) {
        upperNames.push(names[i])
      } else {
        normalNames.push(names[i])
      }
    }

    if (normalNames.length > 0) {
      if (normalNames.length === 1) {
        defaultValueArray += normalNames[0] + '!'
      } else {
        const ttSaufDernier = normalNames.slice(0, -1)
        const last = normalNames.slice(-1)
        defaultValueArray += ttSaufDernier.join(', ') + ' and ' + last + '.'
      }
    }

    if (upperNames.length > 0) {
      defaultValueArray += ' AND ' + defaultValueUppercase + upperNames.join(', ') + '!'
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
