"use client";
import styles from "./footer.module.css";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", x: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      viewport={{ once: true }}
      className={styles.footer}>
      <span>© 2025 fernando zárate</span>
      <span>Casi todos los derechos reservados</span>
    </motion.div>
  );
}
