// Components
import Meta from './Meta'
import Nav from './Nav'
import Hero from './Hero'

import SideElement from './SideElement'
import Email from './email'

// Stylesheets
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
      <div className="website">
        <Meta />
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Hero />
                {children}
            </main>
        </div>
        <SideElement />
        <Email />
      </div>
      
  )
}

export default Layout