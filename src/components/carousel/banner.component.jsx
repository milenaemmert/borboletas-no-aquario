import s from './banner.module.css'
import { useEffect, useRef } from 'react'

export const Banner = ({ image, title, description, author, bannerRef, currentBanner }) => {
  const ref = useRef(bannerRef)

  useEffect(() => {
    if(bannerRef === currentBanner) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [currentBanner])

  return (
    <div className={s.banner} ref={ref}>
      <img src={image} alt='' />

      <div className={s.imageDescription}>
        <span>{title}</span>
        
        <p>{description}</p>
        <a href='#' target='_blank'>{author}</a>
      </div>
    </div>
  )
}