import React from 'react'
import style from './Header.module.scss'
import HeaderBottom from './HeaderBottom/HeaderBottom'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  )
}

export default Header
