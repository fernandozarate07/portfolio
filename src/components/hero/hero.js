"use client";
import { motion } from "motion/react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", x: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.3, ease: "circOut" }}
      viewport={{ once: true }}
      className={styles.hero}>
      <h1 className={styles.hero__name}>Fernando Zárate</h1>
      <h2 className={styles.hero__rol}>Full Stack Designer</h2>
      <p className={styles.hero__description}>
        Mi objetivo es diseñar webs con carácter, donde funcionalidad y estética se fusionen para ir más allá de su
        propósito y reflejar auténticamente la identidad de la marca.
      </p>
    </motion.div>
  );
}
