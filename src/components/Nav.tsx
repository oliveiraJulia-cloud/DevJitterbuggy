import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

type Props = {
  compact?: boolean
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre-mim', label: 'Sobre mim' },
  { to: '/contato', label: 'Contato' },
]

function Nav({ compact = false }: Props) {
  return (
    <nav className={compact ? `${styles.nav} ${styles.compact}` : styles.nav}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav