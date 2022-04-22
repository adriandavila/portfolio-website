import { email } from '../config'

const Email = () => {
  return (
    <div className="side-email">
        <a href={"mailto:"+email}>{email}</a>
    </div>
  )
}

export default Email