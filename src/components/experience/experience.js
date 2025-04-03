"use client";
import Box from "../box/box";
import styles from "./experience.module.css";
import { motion } from "motion/react";
import data_experiences from "@/app/data_experiences.json";

export default function Experience() {
  const experience = data_experiences;
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", x: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      viewport={{ once: true }}
      className={styles.experience}>
      <h2 className={styles.experience__title}>Experiencia</h2>
      <div className={styles.experience__box_container}>
        <Box content={experience[0]}></Box>
      </div>
    </motion.div>
  );
}
