// Components
import Meta from './Meta'
import Nav from './Nav'
import Hero from './Hero'
import SideSocials from './SideSocials'
import SideEmail from './SideEmail'

// Stylesheets
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <div className="home">
        <Meta />
        <Nav />
        <Hero />
      </div>
      <div className="content">
        {children}
      </div>
      <SideSocials />
      <SideEmail />
    </>
      
      
  )
}

export default Layout