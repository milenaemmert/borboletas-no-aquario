import s from './carousel.module.css'
import a from '../../assets/images/carousel-a.png'
import b from '../../assets/images/carousel-b.png'
import c from '../../assets/images/carousel-c.png'
import d from '../../assets/images/carousel-d.png'
import { circle } from '../../assets/icons'
import { useState, useEffect, useRef } from 'react'

export const Carousel = () => {
  const scrollArea = useRef(null)
  const w0 = useRef(null) // .current **ver depois
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
      <span>ei, olha essa exposição, antes de tudo</span>
      
      <div className={s.containerImages} ref={scrollArea}>
        <div className={s.imageWrapper} ref={w0}>
          <img src={a} alt='Dog' />
        </div>
        <div className={s.imageWrapper} ref={w1}>
          <img src={b} alt='Bun' />
        </div>
        <div className={s.imageWrapper} ref={w2}>
          <img src={c} alt='Cat' />
        </div>
        <div className={s.imageWrapper} ref={w3}>
          <img src={d} alt='Ham' />
        </div>
      </div>
      
      {circle}

      <button className={s.backward} onClick={handleBackward}>Backward</button>
      <button className={s.forward} onClick={handleForward}>Forward</button>
    </div>
  )
}