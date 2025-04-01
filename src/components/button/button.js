import styles from "./button.module.css";
import { HiArrowTrendingUp } from "react-icons/hi2";

export default function Button({ content }) {
  return (
    <button className={styles.button}>
      <span>{content}</span>
      <HiArrowTrendingUp />
    </button>
  );
}
