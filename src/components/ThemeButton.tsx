import styles from './ThemeButton.module.css'

type Props = {
  onToggle: () => void
}

function ThemeButton({ onToggle }: Props) {
  return (
    <button type="button" className={styles.button} onClick={onToggle}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
      Tema
    </button>
  )
}

export default ThemeButton