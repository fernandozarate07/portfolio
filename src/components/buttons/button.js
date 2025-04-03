import styles from "./button.module.css";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { motion } from "motion/react";

export default function Button({ content }) {
  return (
    <motion.button
      animate={{ background: "rgba(0, 0, 0, 0.2)" }} // Estado base
      whileHover={{
        background: ["rgba(0, 0, 0, 0.2)", "#000000", "rgba(0, 0, 0, 0.2)"],
        transition: { duration: 2, repeat: Infinity },
      }}
      exit={{ background: "rgba(0, 0, 0, 0.2)" }} // Asegura que vuelva al original
      className={styles.button}>
      <span>{content}</span>
      <HiArrowTrendingUp />
    </motion.button>
  );
}
