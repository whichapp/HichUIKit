import React from 'react'

import Base from './Base'

export default function ButtonPlainSecondary({ children, ...rest }) {
  return (
    <Base variant='plain-secondary' {...rest}>
      {children}
    </Base>
  )
}
