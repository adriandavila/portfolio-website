import { email } from '../config'

const SideEmail = () => {
  return (
    <div className="side-email">
        <a href={"mailto:"+email}>{email}</a>
    </div>
  )
}

export default SideEmail