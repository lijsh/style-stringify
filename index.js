const numericProperties = [
  'height', 'width', 'top', 'left', 'right', 'bottom', 'fontSize', 'maxHeight', 'maxWidth', 'lineHeight',
  'margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom',
  'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
]

const stylify = (style, { suffix = 'px' } = {}) =>
  Object.keys(style).reduce((styleStr, key) => {
    const value = style[key]
    const needSuffix = numericProperties.includes(key) && typeof value === 'number'
    const decamelizedKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    return `${styleStr}${decamelizedKey}: ${value}${needSuffix ? suffix : ''}; `
  }, '')

export default stylify
