import styles from './style.module.css'

const getClassNames = (variant, classes) => `${classes} ${styles[variant]}`

export default getClassNames
