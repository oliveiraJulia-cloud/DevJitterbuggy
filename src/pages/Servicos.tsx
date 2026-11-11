import { useState } from 'react'
import styles from './Servicos.module.css'

const services = [
  { label: 'Isso Aqui', title: 'Serviço 1' },
  { label: 'Aquilo Lá', title: 'Serviço 2' },
  { label: 'E tal e tal', title: 'Serviço 3' },
]

const lorem = [
  'blablablablablablablablablablablablablablablablablablablablabla blablablablablablablablablablablablablablablabla',
  'blablablablablablablablablablablablablablablablablablablablabla',
  'blablablablablablablablablablablablablablablablablablablablabla',
]

function Servicos() {
  const [selected, setSelected] = useState(0)
  const service = services[selected]

  return (
    <>
      <div className={styles.tabs}>
        {services.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={
              index === selected
                ? `${styles.tab} ${styles.tabActive}`
                : styles.tab
            }
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <main className={styles.content}>
        <h1 className={styles.title}>Serviços</h1>
        <div className={styles.rule} />
        <h2 className={styles.subtitle}>{service.title}</h2>
        {lorem.map((text) => (
          <p key={text} className={styles.text}>
            {text}
          </p>
        ))}
      </main>
    </>
  )
}

export default Servicos