import styles from '../styles/Technologies.module.css'

const Technologies = () => {
  return (
      
    <div className={styles.orbit}>
        <div className={styles.centerImage}>
            <img src="/technologies/woman.png" alt="" />
            <img src="/technologies/man.png" alt="" />
        </div>
        <ul className={styles.list}>
            <li>
                <img src="/technologies/tensorflow.svg" className={styles.icon} alt="" />
                <p>Tensorflow</p>
            </li>
            <li>
                <img src="/technologies/pytorch.svg" className={styles.icon} alt="" />
                <p>PyTorch</p>
            </li>
            <li>
                <img src="/technologies/python.svg" className={styles.icon} alt="" />
                <p>Python</p>
            </li>
            <li>
                <img src="/technologies/javascript.svg" className={styles.icon} alt="" />
                <p>JavaScript (ES6+)</p>
            </li>
            <li>
                <img src="/technologies/vue.svg" className={styles.icon} alt="" />
                <p>Vue</p>
            </li>
            <li>
                <img src="/technologies/react.svg" className={styles.icon} alt="" />
                <p>React</p>
            </li>
            <li>
                <img src="/technologies/postgres.png" className={styles.icon} alt="" />
                <p>PostgreSQL</p>
            </li>
            <li>
                <img src="/technologies/typescript.svg" className={styles.icon} alt="" />
                <p>TypeScript</p>
            </li>
        </ul>
    </div>
  )
}

export default Technologies