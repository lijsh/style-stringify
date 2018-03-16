import styleStringify from './'

test('main', () => {
  expect(typeof styleStringify).toBe('function')
})

test('should work on legal style object', () => {
  expect(styleStringify({
    color: 'red',
    fontSize: 16,
  })).toBe('color: red; font-size: 16px; ')
})

test('should work on setting suffix', () => {
  expect(styleStringify({
    color: 'red',
    marginLeft: 0.3,
  }, { suffix: 'rem' })).toBe('color: red; margin-left: 0.3rem; ')
})
