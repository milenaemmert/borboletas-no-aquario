import s from './header.module.css'
import { Logo } from './logo.component'
import { MidiaIcons } from './midia-icons.component'

export const Header = () => {
  return (
    <header className={s.headerContainer}>
      <div className={s.logoContainer}>
        <Logo />
        <span>Muito prazer, ao seu dispor</span>
      </div>
      <div className={s.midiaIconsContainer}>
        <MidiaIcons />
      </div>
    </header>
  )
}