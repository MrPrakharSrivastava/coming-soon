import styles from '../styles/WaafooComingSoon.module.css';
import { WifiIcon, BatteryIcon } from './Icons';

export default function PhoneCard() {
  return (
    <div className={styles.phoneCard}>
      {/* Status bar */}
      <div className={styles.phoneStatus}>
        <span>9:41</span>
        <div className={styles.phoneStatusIcons}>
          <div className={styles.phBars}>
            {[5, 7, 10, 12].map((h, i) => (
              <div key={i} className={styles.phBar} style={{ height: h }} />
            ))}
          </div>
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>

      {/* Header */}
      <div className={styles.phoneHeader}>Water Quality Dashboard</div>

      {/* User row */}
      <div className={styles.phoneUser}>
        <div className={styles.phoneAvatar}>W</div>
        <div className={styles.phoneUserInfo}>
          <div className={styles.phoneUserName}>Waafoo Home</div>
          <div className={styles.phoneUserSub}>Smart RO System</div>
        </div>
        <div className={styles.liveBtn}>Live</div>
      </div>

      {/* Water drop image */}
      <div className={styles.phoneImg}>
        <div className={styles.waterDrop} />
      </div>

      {/* Product info */}
      <div className={styles.phoneProduct}>
        <div className={styles.productName}>Pure Flow Pro</div>
        <div className={styles.productSub}>Smart RO Purifier — 8 Stage</div>
      </div>


      {/* Review */}
      <div className={styles.phoneReview}>
        <div className={styles.reviewRow}>
          <div className={styles.reviewAvatar} />
          <div className={styles.reviewName}>Priya Sharma</div>
          <div className={styles.reviewTime}>2 min ago</div>
        </div>
        <div className={styles.reviewText}>
          Service was amazing! Filter replaced on time 👌
        </div>
      </div>
    </div>
  );
}
