import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

// Brand icons keep using remixicon-react (already a dependency of the project).
const icons = {
  instagram: InstagramLineIcon,
  facebook: FacebookCircleLineIcon,
  dribbble: DribbbleLineIcon,
  youtube: YoutubeLineIcon,
  github: GithubLineIcon,
}

export default function SocialIcon({ name, size = 20 }) {
  const Icon = icons[name]
  return Icon ? <Icon size={size} /> : null
}
