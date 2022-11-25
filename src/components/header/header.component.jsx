import s from './header.module.css'
import { Logo } from './logo.component'
import { MidiaIcons } from './midia-icons.component'

export const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <Logo />
        <span>Muito prazer, meu nome é borboletas no aquário</span>
      </div>

      <MidiaIcons />

    </header>
  )
}