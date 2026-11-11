import styles from './ThemeButton.module.css'

type Props = {
  onToggle: () => void
  iconOnly?: boolean
}

function ThemeButton({ onToggle, iconOnly = false }: Props) {
  const className = iconOnly
    ? `${styles.button} ${styles.iconOnly}`
    : styles.button

  return (
    <button
      type="button"
      className={className}
      onClick={onToggle}
      aria-label="Alternar tema"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
      {!iconOnly && 'Tema'}
    </button>
  )
}

export default ThemeButton