import React from 'react'

import { Switch } from '@mui/material'
import styles from './style.module.css'

export default function HichSwitch({ className, checked, ...rest }) {
  const myClass = `${styles['hich-mui-switch']} 
    ${checked ? styles['hich-mui-switch-checked'] : ''}`
  const classes = `${className} ${myClass}`

  console.log('1-----------------------')
  console.log(rest)

  return <Switch className={classes} checked={checked} {...rest} />
}
