const config = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  i: 'i',
  b: 'b',
  u: 'u',
  q: 'q',
  label: 'label',
  main: 'main',
  section: 'section',
  article: 'article',
  aside: 'aside',
  header: 'header',
  footer: 'footer',
  nav: 'nav',
  div: 'div',
  ul: 'ul',
  ol: 'ol',
  li: 'li'
}

const getWrapperTag = (target) => {
  if (target === '' || typeof target === typeof undefined) return ''

  return config?.[target] ?? 'span'
}

export default getWrapperTag
