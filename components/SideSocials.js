import Icon from './icons/icon.js'
import { socialMedia } from '../config'

const SideSocials = () => {
  return (
    <ul className="side-socials">
        {socialMedia && socialMedia.map(({ name, url }, i) => (
            <li key={i}>
                <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                    <Icon name={name} />
                </a>
            </li>
        ))}
    </ul>
  )
}

export default SideSocials