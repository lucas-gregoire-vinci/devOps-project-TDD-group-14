const { greet } = require('../src/helloWorld')

test('n°1: greet function to return "Hello, Jean-Kevin." if name is "Jean-Kevin"', () => {
  const name = 'Jean-Kevin'

  const result = greet(name)

  expect(result).toBe('Hello, Jean-Kevin.')
})

test('n°2.1: greet function to return "Hello, my friend." if name is "null"', () => {
  const name = null

  const result = greet(name)

  expect(result).toBe('Hello, my friend.')
})
