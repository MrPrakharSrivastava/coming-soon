import styles from '../styles/WaafooComingSoon.module.css';

export default function TdsChip() {
  return (
    <div className={`${styles.miniCard} ${styles.cardTds}`}>
      <div className={styles.tdsCircle}>28</div>
      <div>
        <div className={styles.tdsInfoLabel}>TDS Level</div>
        <div className={styles.tdsInfoVal}>Excellent ✓</div>
      </div>
    </div>
  );
}
