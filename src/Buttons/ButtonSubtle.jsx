import React from 'react'

import Base from './Base'

export default function ButtonSubtle({ children, ...rest }) {
  return (
    <Base variant='subtle' {...rest}>
      {children}
    </Base>
  )
}
