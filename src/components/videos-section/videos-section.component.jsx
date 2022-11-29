import s from './videos-section.module.css'
import { Video } from './video.component'

export const VideosSection = () => {
  return (
    <main>
      <span>agora sim, veja alguns vídeos que eu tenho lá no youtube (se tiver só um, ou é porque eu fiquei com preguiça, ou porque eu)</span>

      <Video />
    </main>
  )
}