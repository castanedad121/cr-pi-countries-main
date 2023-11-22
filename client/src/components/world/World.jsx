import styles from './World.module.css';

function World() {
  return (
    <div className={styles.globo}><div className={styles.frontal}></div><div className={styles.mapfront}></div><div className={styles.mapback}></div><div className={styles.back}></div></div>
  )
}

export default World