import React from 'react'
import style from './HeaderBottom.module.scss'

const HeaderBottom = () => {
  const state = {
    bottomHeaderLeftSectionText: {
      login: 'Login',
      signup: 'Reggistrazione',
      email: 'sport@gmail.com',
    },
  }

  const bottomHeaderLeftSection = Object.keys(
    state.bottomHeaderLeftSectionText
  ).map((key) => (
    <li key={key}>
      <a href="/" className={style.actionsHeader__ + key}>
        <span>{state.bottomHeaderLeftSectionText[`${key}`]}</span>
      </a>
    </li>
  ))

  return (
    <div className={style.header__bottom + ' ' + style.bottomHeader}>
      <div className={style.bottomHeader__content_container}>
        {/*  */}
        <div className={style.bottomHeader__column}>
          <ul
            className={style.bottomHeader__actions + ' ' + style.actionsHeader}
          >
            {bottomHeaderLeftSection}
          </ul>
        </div>
        {/*  */}
        <div className={style.bottomHeader__column}>
          <div className={style.bottomHeader__info + ' ' + style.infoHeader}>
            <div className={style.infoHeader__column}>
              <a href="/" className={style.infoHeader__callback}>
                <span>Chiamata di ritorno</span>
              </a>
            </div>
            <div className={style.infoHeader__column}>
              <div className={style.infoHeader__schedule}>
                <p>
                  <span>Lun-Ven: 9-18</span>
                </p>
                <p>
                  <span>Lun-Ven: 9-12</span>
                </p>
                <div className={style.infoHeader__column}>
                  <a className={style.infoHeader__cart} href="tel:3334444555">
                    <span>12</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
