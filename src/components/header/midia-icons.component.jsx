import s from './midia-icons.module.css'
import { notion, youtube, github, dev, linkedin } from '../../assets/icons'

export const MidiaIcons = () => {
  return (
    <div className={s.container}>
      <a href="https://cutt.ly/revisao-js-html-css" target="_blank">
        {notion}
      </a>
      <a href="https://www.youtube.com/@milenaemmert" target="_blank">
        {youtube}
      </a>
      <a href="https://github.com/milenaemmert" target="_blank">
        {github}
      </a>
      <a href="https://dev.to/milenaemmert" target="_blank">
        {dev}
      </a>
      <a href="https://www.linkedin.com/in/milenaemmert/" target="_blank">
        {linkedin}
      </a>
    </div>
  )
}