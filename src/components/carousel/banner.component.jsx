import s from './banner.module.css'
import { useRef } from 'react'

export const Banner = ({ image, title, description, author, ref }) => {
  const teste = useRef(ref)

  return (
    <div className={s.banner} ref={teste}>
      <img src={image} alt='' />

      <div className={s.imageDescription}>
        <span>{title}</span>
        
        <p>{description}</p>
        <a href='#' target='_blank'>{author}</a>
      </div>
    </div>
  )
}