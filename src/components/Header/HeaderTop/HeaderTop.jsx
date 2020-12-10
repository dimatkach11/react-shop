import React from 'react'
import style from './HeaderTop.module.scss'
import Menu from '../Menu/Menu'
import logoImg from '../../../assets/img/logo.png'

const HeaderTop = () => {
  return (
    <div className={style.header__top + ' ' + style.topHeader}>
      <div className={style.topHeader__content}>
        {/* column 1 */}
        <div className={style.topHeader__column}>
          <div className={style.topHeader__menu + ' ' + style.menu}>
            {/* Menu component */}
            <Menu />
          </div>
        </div>
        {/* column 2 */}
        <div className={style.topHeader__column}>
          <div className={style.topHeader__logo}>
            <img src={logoImg} alt="logo" />
            <div className={style.topHeader__logo_text}>Negozio Sportivo</div>
          </div>
        </div>
        {/* column 3 */}
        <div className={style.topHeader__column}>
          <div
            className={style.topHeader__contacts + ' ' + style.contactsHeader}
          >
            <div className={style.contactsHeader__column}>
              <div
                className={
                  style.contactsHeader__item +
                  ' ' +
                  style.contactsHeader__item_icon
                }
              >
                <div className={style.contactsHeader__label}>Mosca</div>
                <div className={style.contactsHeader__phone}>
                  <a href="tel:3334444555">333-4444-555</a>
                </div>
              </div>
            </div>
            <div className={style.contactsHeader__column}>
              <div className={style.contactsHeader__item}>
                <div className={style.contactsHeader__label}>
                  Gratis per la Russia
                </div>
                <div className={style.contactsHeader__phone}>
                  <a href="tel:3334444555">333-4444-555</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
