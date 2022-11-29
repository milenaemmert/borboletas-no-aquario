import s from './banner.module.css'
import { BANNER } from '../../constants/banner'

export const Banner = () => {
  BANNER.map(elem => {
    const index = BANNER.indexOf(elem)
    return (

      <div className={s.banner}>
        <img src={elem.image} alt='' />
        <div className={s.imageDescription}>
          <span>{elem.title}</span>
          <p>{elem.description}</p>
          <a href='#' target='_blank'>{elem.author}</a>
        </div>
      </div>
    )
  })
}