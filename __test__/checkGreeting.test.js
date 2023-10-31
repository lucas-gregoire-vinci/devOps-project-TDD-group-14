const { greet } = require('../src/helloWorld')

test('greet function to return "Hello, Jean-Kevin.', () => {
  const name = 'Jean-Kevin'

  const result = greet(name)

  expect(result).toBe('Hello, Jean-Kevin.')
})
