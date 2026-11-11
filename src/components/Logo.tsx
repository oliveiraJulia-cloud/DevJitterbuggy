import styles from './Logo.module.css'

function Logo() {
  return (
    <svg viewBox="0 0 100 100" className={styles.logo} role="img" aria-label="Jitterbuggy">
      <polygon
        className={styles.burst}
        points="95,50 80.5,62.6 81.8,81.8 62.6,80.5 50,95 37.4,80.5 18.2,81.8 19.5,62.6 5,50 19.5,37.4 18.2,18.2 37.4,19.5 50,5 62.6,19.5 81.8,18.2 80.5,37.4"
      />
      <text x="50" y="66" textAnchor="middle" className={styles.letter}>J</text>
    </svg>
  )
}

export default Logo