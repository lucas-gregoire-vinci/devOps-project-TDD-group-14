const { greet } = require('../src/helloWorld')

test('null to equal "Hello, my friend"', () => {
  const name = null

  expect(greet(name)).toBe('Hello, my friend')
})
