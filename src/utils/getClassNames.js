const getClassNames = (variant, classes) =>
  `${typeof classes !== typeof undefined ? classes : ''} ${variant}`

export default getClassNames
