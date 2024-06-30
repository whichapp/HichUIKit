import React from 'react'

import Base from './Base'

export default function ButtonPrimary({ children, ...rest }) {
  return (
    <Base variant='primary' {...rest}>
      {children}
    </Base>
  )
}
