import React from 'react'

export default function Typography(params) {
  const children = params?.children ?? 'Empty Box...'

  return <div style={{ color: 'blue' }}>{children}</div>
}
