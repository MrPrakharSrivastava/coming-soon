import { useState } from 'react'
import styles from './WaafooComingSoon.module.css'
import ROCard from './ROCard'
import { CheckIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from './Icons'

const LOGO_ICON = '/logo_1.png'
const LOGO_TEXT = '/logo_2.png'

const SOCIALS = [
  { label: 'LinkedIn', Icon: LinkedInIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

export default function WaafooComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(email.trim())) {
      setError(true)
      setTimeout(() => setError(false), 1200)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className={styles.wrapper}>
      {/* Background orb */}
      <div className={styles.bgOrb} />

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <img className={styles.navIcon} src={LOGO_ICON} alt="Waafoo icon" />
          <img className={styles.navTextImg} src={LOGO_TEXT} alt="waafoo" />
        </div>
      </nav>

      {/* ── MAIN ── */}
      <main className={styles.main}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.tag}>
            <div className={styles.tagLine} />
            Coming Soon
          </div>

          <h1 className={styles.headline}>
            Get Notified<br />
            When We <span className={styles.accent}>Launch</span>
          </h1>

          {!submitted ? (
            <>
              <div className={`${styles.formWrap}${error ? ' ' + styles.err : ''}`}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                />
                <button className={styles.btn} onClick={handleSubmit}>
                  Notify Me
                </button>
              </div>
              <p className={styles.spam}>*Don't worry, we will not spam you :)</p>
            </>
          ) : (
            <div className={styles.success}>
              <CheckIcon />
              You're on the list! We'll reach out soon.
            </div>
          )}
        </div>

        {/* RIGHT — two image cards */}
        <div className={styles.right}>
          <ROCard />
        </div>

      </main>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.socials}>
          {SOCIALS.map(({ label, Icon }) => (
            <a key={label} href="#" className={styles.socBtn} aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
        <a href="mailto:connect@waafoo.in" className={styles.emailLink}>
          Email Us
        </a>
      </footer>
    </div>
  )
}
