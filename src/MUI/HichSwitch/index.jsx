import React from 'react'

import { Switch } from '@mui/material'
import styles from './style.module.css'

export default function HichSwitch({ className, checked, ...rest }) {
  const myClass = `${styles['hich-mui-switch']} 
    ${checked ? styles['hich-mui-switch-checked'] : ''}
    ${checked ? 'wwwwwwwwwwwwwwww' : 'sssssssssssssss'}`
  const classes = `${className} ${myClass}`

  return <Switch className={classes} checked={checked} {...rest} />
}
