import s from './logo.module.css'
import { smile, star } from '../../assets/icons'

export const Logo = () => {

  return (
    <div className={s.container}>
      <div className={`${s.star} ${s.star1}`}>
        {star}
      </div>

      <div className={`${s.star} ${s.star2}`}>
        {star}
      </div>

      <div className={`${s.star} ${s.star3}`}>
        {star}
      </div>

      <div className={s.smile}>
        {smile}
      </div>
    </div>
  )
}