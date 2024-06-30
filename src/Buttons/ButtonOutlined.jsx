import React from 'react'

import Base from './Base'

export default function ButtonOutlined({ children, ...rest }) {
  return (
    <Base variant='outlined' {...rest}>
      {children}
    </Base>
  )
}
