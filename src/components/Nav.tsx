import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/servicos">Serviços</Link>
      <Link className={styles.link} to="/projetos">Projetos</Link>
      <Link className={styles.link} to="/sobre-mim">Sobre mim</Link>
      <Link className={styles.link} to="/contato">Contato</Link>
    </nav>
  )
}

export default Nav