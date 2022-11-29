import s from './carousel.module.css'
import { Banner } from './banner.component'
import { BANNER } from '../../constants/banner'
import { circle } from '../../assets/icons'
import { useState, useEffect, useRef } from 'react'

export const Carousel = () => {
  const scrollArea = useRef(null)
  const w0 = useRef(null)
  const w1 = useRef(null)
  const w2 = useRef(null)
  const w3 = useRef(null)

  const elements = {
    0: w0,
    1: w1,
    2: w2,
    3: w3
  }

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    elements[current].current.scrollIntoView({behavior: "smooth", block: "start"})
  }, [current])

  const handleBackward = () => {
    if(current === 0) {
      setCurrent(3)
    } else {
      setCurrent(current => current - 1)
    }
  }

  const handleForward = () => {
    if(current === 3) {
      setCurrent(0)
    } else {
      setCurrent(current => current + 1)
    }
  }

  return (
    <div className={s.container}>
      <span className={s.containerTitle}>ei, olha essa exposição, antes de tudo</span>
      
      
      <div className={s.containerImages} ref={scrollArea}>
        <div className={s.imageWrapper} ref={w0}>
          <img src={BANNER[2].image} alt='Dog' />
          <div className={s.imageDescription}>
            <span>{BANNER[2].title}</span>
            <p>{BANNER[2].description}</p>
            <a href='#' target='_blank'>{BANNER[2].author}</a>
          </div>
        </div>
        
        <div className={s.imageWrapper} ref={w1}>
          <img src={BANNER[0].image} alt='Bun' />
          <div className={s.imageDescription}>
            <span>{BANNER[0].title}</span>
            <p>{BANNER[0].description}</p>
            <a href='#' target='_blank'>{BANNER[0].author}</a>
          </div>
        </div>
        
        <div className={s.imageWrapper} ref={w2}>
          <img src={BANNER[1].image} alt='Cat' />
          <div className={s.imageDescription}>
            <span>{BANNER[1].title}</span>
            <p>{BANNER[1].description}</p>
            <a href='#' target='_blank'>{BANNER[1].author}</a>
          </div>
        </div>
        
        <div className={s.imageWrapper} ref={w3}>
          <img src={BANNER[3].image} alt='Ham' />
          <div className={s.imageDescription}>
            <span>{BANNER[3].title}</span>
            <p>{BANNER[3].description}</p>
            <a href='#' target='_blank'>{BANNER[3].author}</a>
          </div>
        </div>
      </div>
      
      {circle}

      <button className={s.backward} onClick={handleBackward}>Backward</button>
      <button className={s.forward} onClick={handleForward}>Forward</button>
    </div>
  )
}