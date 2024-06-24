const config = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  label: 'label',
  div: 'div'
}

const getWrapperTag = (target) => {
  if (target === '' || typeof target === typeof undefined) return ''

  return config?.[target] ?? 'span'
}

export default getWrapperTag
