import styles from './TdsChip.module.css'

export default function TdsChip() {
  return (
    <div className={styles.chip}>
      <div className={styles.circle}>28</div>
      <div className={styles.info}>
        <div className={styles.label}>TDS LEVEL</div>
        <div className={styles.val}>Excellent ✓</div>
      </div>
    </div>
  )
}
