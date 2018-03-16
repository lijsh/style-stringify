import classOf from 'class-of'
import decamelize from 'decamelize'

const numericProperties = [
  'height', 'width', 'top', 'left', 'right', 'bottom', 'fontSize', 'maxHeight', 'maxWidth', 'lineHeight',
  'margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom',
  'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
]

const stylify = (style, { suffix = 'px' } = {}) =>
  Object.entries(style).reduce((styleStr, [key, value]) => {
    const needSuffix = numericProperties.includes(key) && classOf(value) === 'number'
    const decamelizedKey = decamelize(key, '-')
    return `${styleStr}${decamelizedKey}: ${value}${needSuffix ? suffix : ''}; `
  }, '')

export default stylify
