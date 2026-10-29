import Wordmark from '../components/Wordmark'
import Nav from '../components/Nav'
import ThemeButton from '../components/ThemeButton'
import styles from './Home.module.css'

type Props = {
  onToggleTheme: () => void
}

function Home({ onToggleTheme }: Props) {
  return (
    <main className={styles.page}>
      <Wordmark />
      <p className={styles.welcome}>Bem-vindo</p>
      <Nav />
      <ThemeButton onToggle={onToggleTheme} />
    </main>
  )
}

export default Home