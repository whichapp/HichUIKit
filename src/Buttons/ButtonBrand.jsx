import React from 'react'

import Base from './Base'

export default function ButtonBrand({ children, ...rest }) {
  return (
    <Base variant='brand' {...rest}>
      {children}
    </Base>
  )
}
