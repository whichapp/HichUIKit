import React from 'react'

import Base from './Base'

export default function ButtonPlain({ children, ...rest }) {
  return (
    <Base variant='plain' {...rest}>
      {children}
    </Base>
  )
}
