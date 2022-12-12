import s from './dots.module.css'

export const Dots = ({ banners, currentBanner, setCurrentBanner }) => {
  const handleClick = (index) => {
    setCurrentBanner(index)
  }

  const renderDot = () => {
    return banners.map((e, index) => {
      const isSelected = currentBanner === index ? `${s.dot} ${s.selected}` : `${s.dot}`

      return (
        <div key={index} className={isSelected} name={index} onClick={() => handleClick(index)}></div>
      )
    })
  }

  return (
    <div className={s.dots}>
      {renderDot()}
    </div>
  )
}