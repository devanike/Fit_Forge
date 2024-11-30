import styles from './style'
import { Navbar, Hero, About, Partners, Join, BMI, Footer } from './components'

const App = () => {
  return (
    <div className={`background dark:background w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`background dark:background ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`background dark:background ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Partners />
          <Join />
          <BMI />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
// TODO -- make the links work