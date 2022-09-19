const functions = require('./functions.js')

test('returnTwo is equal to 2', () => {
    expect(returnTwo()).toBe(2)
} )

test('greeting is Hello James', () => {
    expect(greeting('James')).toBe('Hello, James')
} )

test('greeting is Hello Jill', () => {
    expect(greeting('Jill')).toBe('Hello, Jill')
} )

test('add is equal to 3', () => {
    expect(add(1,2)).toBe(3)
} )

test('add is equal to 14', () => {
    expect(add(5,9)).toBe(14)
} )

describe('Math functions', () => {
    test('multiply is equal to 50', () => expect(multiply(10,5)).toBe(50))
    test('divide is equal to 2', () => expect(divide(10,5)).toBe(2))
    test('subtract is equal to 5', () => expect(subtract(10,5)).toBe(5))
} )
