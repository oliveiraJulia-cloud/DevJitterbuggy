import Logo from './Logo'
import ThemeButton from './ThemeButton'
import Nav from './Nav'
import styles from './PageHeader.module.css'

type Props = {
  onToggleTheme: () => void
}

function PageHeader({ onToggleTheme }: Props) {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeButton iconOnly onToggle={onToggleTheme} />
      <Nav compact />
    </header>
  )
}

export default PageHeader