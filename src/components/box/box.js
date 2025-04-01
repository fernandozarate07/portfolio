import styles from "./box.module.css";

export default function Box({ content }) {
  return (
    <div className={styles.box}>
      <div className={styles.box__left}>
        <h3 className={styles.box__title}>{content.title}</h3>
        <p className={styles.box__description}>{content.description}</p>
      </div>
      <div className={styles.box__right}>
        <h3 className={`${styles.box__title} ${styles.box__year}`}>
          <span>{content.year.start}</span> - <span>{content.year.end}</span>
        </h3>
      </div>
    </div>
  );
}
