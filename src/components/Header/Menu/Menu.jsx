import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Menu.module.scss'

const Menu = () => {
  const state = {
    menuLinks: {
      upper: ['Marche', 'Vendita', 'Consegna e montaggio'],
      bottom: ['Garanzia', 'Pagamento', 'Contatti'],
    },
  }

  const menuLinksUpper = state.menuLinks.upper.map((link) => (
    <li key={link}>
      <NavLink to="/" className={style.menu__link}>
        {link}
      </NavLink>
    </li>
  ))
  const menuLinksBottom = state.menuLinks.bottom.map((link) => (
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
        <ul className={style.menu__list + ' ' + style.menu}>
          {menuLinksUpper}
        </ul>
        <ul className={style.menu__list + ' ' + style.menu}>
          {menuLinksBottom}
        </ul>
      </nav>
    </>
  )
}

export default Menu
