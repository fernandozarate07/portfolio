import styles from "./button.module.css";

export default function Button({ content }) {
  return (
    <div className={styles.button_container}>
      <button className={styles.button}>
        <span>{content}</span>
      </button>
    </div>
  );
}
