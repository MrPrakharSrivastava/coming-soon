import styles from './ROCard.module.css'
import TdsChip from './TdsChip'

const RO_IMG_1 = '/image_1.jpeg'

export default function ROCard() {
  return (
    <div className={styles.stack}>
      <div className={styles.card}>
        <div className={styles.tdsOverlay}>
          {/* <TdsChip /> */}
        </div>
        <img src={RO_IMG_1} alt="Your RO is lying to you" className={styles.img} />
      </div>
    </div>
  )
}
