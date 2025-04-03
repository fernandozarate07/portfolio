"use client";
import styles from "./studies.module.css";
import { motion } from "motion/react";
import Box from "@/components/box/box";
import data_studies from "@/app/data_studies.json";

export default function Studies() {
  const studies = data_studies;
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", x: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      viewport={{ once: true }}
      className={styles.studies}>
      <h2 className={styles.studies__title}>Estudios</h2>
      <div className={styles.studies__box_container}>
        <Box content={studies[0]}></Box>
        <Box content={studies[1]}></Box>
      </div>
    </motion.div>
  );
}
