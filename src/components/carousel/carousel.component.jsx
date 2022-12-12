import s from './carousel.module.css'
import { Banner } from './banner.component'
import { BANNERS } from '../../constants'
import { circle } from '../../assets/icons'
import { useState } from 'react'

export const Carousel = () => {
  const [currentBanner, setCurrentBanner] = useState(0)

  const handleBackward = () => {
    if (currentBanner === 0) {
      setCurrentBanner(BANNERS.length - 1)
    } else {
      setCurrentBanner(current => current - 1)
    }
  }

  const handleForward = () => {
    if (currentBanner === BANNERS.length - 1) {
      setCurrentBanner(0)
    } else {
      setCurrentBanner(current => current + 1)
    }
  }

  const renderBanners = () => {
    return BANNERS.map((banner, index) => {
      return (
        <Banner
          key={index}
          image={banner.image}
          title={banner.title}
          description={banner.description}
          author={banner.author}
          bannerRef={index}
          currentBanner={currentBanner}
        />
      )
    })
  }

  return (
    <div className={s.container}>
      <span className={s.containerTitle}>ei, olha essa exposição, antes de tudo</span>

      <div className={s.containerImages}>
        {renderBanners()}
      </div>

      {circle}

      <button className={s.backward} onClick={handleBackward}>Backward</button>
      <button className={s.forward} onClick={handleForward}>Forward</button>
    </div>
  )
}