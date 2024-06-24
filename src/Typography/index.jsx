import React from 'react'

import getWrapperTag from './getWrapperTag'
import getClassNames from './getClassNames'

export default function Typography({
  children: V1,
  wrapper: V2,
  variant: V3,
  className: V4,
  ...rest
}) {
  const children = V1 ?? 'Empty Box...'
  const wrapperTag = V2 ?? 'span'
  const variant = V3 ?? 'h-body-l'

  const Tag = getWrapperTag(wrapperTag)
  const getClasses = getClassNames(variant, V4)

  const content = (Tag === '' && (
    <React.Fragment>{children}</React.Fragment>
  )) || <Tag className={getClasses}>{children}</Tag>

  return content
}
