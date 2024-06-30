import React from 'react'

import ButtonIcon from './ButtonIcon'
import getClassNames from '../utils/getClassNames'
import styles from './style.module.css'

export default function Base({
  children,
  size: V1,
  variant: V2,
  className: V3,
  iconLeft: IL,
  iconRight: IR,
  ...rest
}) {
  const variant = `btn-variant-${V2 ?? 'primary'}`
  const size = `btn-size-${V1 ?? 'medium'}`
  const btnClasses = `${styles.btn} ${styles[variant]} ${styles[size]}`

  const getClasses = getClassNames(btnClasses, V3)

  return (
    <button className={getClasses} {...rest}>
      {IL && <ButtonIcon icon={IL} />}
      {children && <span>{children}</span>}
      {IR && <ButtonIcon icon={IR} />}
    </button>
  )
}
