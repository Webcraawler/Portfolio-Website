import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Profile } from './components/Profile/Profile'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Profile />
      <About />
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
