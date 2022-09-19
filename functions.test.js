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