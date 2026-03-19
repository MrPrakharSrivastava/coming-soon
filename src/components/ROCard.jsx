import styles from './ROCard.module.css'
import TdsChip from './TdsChip'

const RO_IMG_1 = '/image_1.jpeg'
const RO_IMG_2 = '/image_2.jpeg'

export default function ROCard() {
  return (
    <div className={styles.stack}>
      <div className={styles.card}>
        <div className={styles.tdsOverlay}>
          {/* <TdsChip /> */}
        </div>
        <img src={RO_IMG_1} alt="Your RO is lying to you" className={styles.img} />
      </div>
      <div className={styles.card}>
        <img src={RO_IMG_2} alt="Not good enough" className={styles.img} />
      </div>
    </div>
  )
}
