import styles from '@/styles/section.module.css'

export const Section = ({heading, children}) => {
  return (
    <section id={heading}>
        <div className={styles.heading}>
          <h1>{heading}</h1>
        </div>
        <div>{children}</div>
    </section>
  )
}
