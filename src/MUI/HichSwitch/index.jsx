import React from 'react'

import { Switch } from '@mui/material'
import styles from './style.module.css'

export default function HichSwitch({ className, checked, disabled, ...rest }) {
  const myClass = `${styles['hich-mui-switch']} 
  ${checked ? styles['hich-mui-switch-checked'] : ''}
  ${disabled ? styles['hich-mui-switch-disabled'] : ''}`
  const classes = `${className} ${myClass}`

  return <Switch className={classes} checked={checked} {...rest} />
}
