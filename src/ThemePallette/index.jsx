import React from 'react'

import getWrapperTag from '../utils/getWrapperTag'
import getClassNames from '../utils/getClassNames'
import styles from './styles.module.css'

export default function ThemePallete({
  children: V1,
  wrapper: V2,
  theme: V3,
  className: V4,
  ...rest
}) {
  const children = V1 ?? 'Empty Box...'
  const wrapperTag = V2 ?? 'div'
  const theme = V3 ?? 'warm'
  const classNmes = `${styles[`${theme}-pallette`]} ${styles.pallette}`

  const Tag = getWrapperTag(wrapperTag)
  const getClasses = getClassNames(classNmes, V4)

  return (
    <Tag className={getClasses} {...rest}>
      {children}
    </Tag>
  )
}
