import s from './carousel.module.css'
import { Banner } from './banner.component'
import { BANNERS } from '../../constants'
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

  /*useEffect(() => {
    elements[current].current.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [current])*/

  const handleBackward = () => {
    if (current === 0) {
      setCurrent(3)
    } else {
      setCurrent(current => current - 1)
    }
  }

  const handleForward = () => {
    if (current === 3) {
      setCurrent(0)
    } else {
      setCurrent(current => current + 1)
    }
  }

  const renderBanners = () => {
    return BANNERS.map((banner, index) => {
      return (
        <Banner
          image={banner.image}
          title={banner.title}
          description={banner.description}
          author={banner.author}
          ref={elements[index]}
        />
      )
    })
  }

  return (
    <div className={s.container}>
      <span className={s.containerTitle}>ei, olha essa exposição, antes de tudo</span>

      <div className={s.containerImages} ref={scrollArea}>
        {renderBanners()}
      </div>

      {circle}

      <button className={s.backward} onClick={handleBackward}>Backward</button>
      <button className={s.forward} onClick={handleForward}>Forward</button>
    </div>
  )
}