import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Menu.module.scss'
const Menu = () => {
  const state = {
    menuLinks: [
      'Marche',
      'Vendita',
      'Consegna e montaggio',
      'Garanzia',
      'Pagamento',
      'Contatti',
    ],
  }
  const menuLinks = state.menuLinks.map((link) => (
    <li key={link}>
      <NavLink to="/" className={style.menu__link}>
        {link}
      </NavLink>
    </li>
  ))
  return (
    <>
      <div className={style.menu__icon + ' ' + style.iconMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={style.menu__body}>
        <ul className={style.menu__list + ' ' + style.menu}>{menuLinks}</ul>
      </nav>
    </>
  )
}

export default Menu
