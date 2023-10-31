const { greet } = require('../src/helloWorld')

test('n°1: greet function to return "Hello, Jean-Kevin." if name is "Jean-Kevin"', () => {
  const name = 'Jean-Kevin'

  const result = greet(name)

  expect(result).toBe('Hello, Jean-Kevin.')
})

test('n°2.1: greet function to return "Hello, my friend." if name is null', () => {
  const name = null

  const result = greet(name)

  expect(result).toBe('Hello, my friend.')
})

test('n°2.2: greet function to return "Hello, my friend." if name is undefined', () => {
  const name = undefined

  const result = greet(name)

  expect(result).toBe('Hello, my friend.')
})

test('n°2.3: greet function to return "Hello, my friend." if name is an empty String', () => {
  const name = ''

  const result = greet(name)

  expect(result).toBe('Hello, my friend.')
})

test('n°3: greet function to return "HELLO, JERRY!" if the entierety of the name is in uppercase', () => {
  const name = 'JERRY'

  const result = greet(name)

  expect(result).toBe('HELLO, JERRY!')
})

test('n°4: greet function to return "Hello, Kratos and Thanathos." if there are 2 names given in an array', () => {
  const names = ['Kratos', 'Thanathos']

  const result = greet(names)

  expect(result).toBe('Hello, Kratos and Thanathos.')
})
