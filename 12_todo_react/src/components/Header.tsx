import React from 'react'

import Styles from './Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
        <h1>REACT + TS TODO</h1>
    </header>
  )
}

export default Header