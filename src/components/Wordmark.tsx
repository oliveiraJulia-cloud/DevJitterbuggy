import styles from './Wordmark.module.css'

function Wordmark() {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 800 320" className={styles.burst} aria-hidden="true">
        <polygon points="790,160 696,205 676,266 523,269 400,310 277,269 124,266 104,205 10,160 104,115 124,54 277,51 400,10 523,51 676,54 696,115" />
      </svg>
      <h1 className={styles.text}>JITTERBUGGY</h1>
    </div>
  )
}

export default Wordmark