"use client";

import styles from "./box.module.css";
import { motion } from "motion/react";

export default function Box({ content }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className={styles.box}>
      <div className={styles.box__left}>
        <h3 className={styles.box__title}>{content.title}</h3>
        <p className={styles.box__description}>{content.description}</p>
      </div>
      <div className={styles.box__right}>
        <h3 className={`${styles.box__title} ${styles.box__year}`}>
          <span>{content.year.start}</span> - <span>{content.year.end}</span>
        </h3>
      </div>
    </motion.div>
  );
}
