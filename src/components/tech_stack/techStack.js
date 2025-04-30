"use client";
import { motion } from "motion/react";
import styles from "./tech_stack.module.css";
import { IoMdArrowDropright } from "react-icons/io";

export default function techStack() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", x: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.3, ease: "circOut" }}
      viewport={{ once: true }}
      className={styles.tech_stack}>
      <h2 className={styles.tech_stack__title}>Tecnologías</h2>
      <div className={styles.tech_stack__items_container}>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>Git</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>GitHub</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>Figma</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>Html</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>Css</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>React</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>Next</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>Node</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>Express</span>
        </div>
        <div className={styles.tech_stack__item}>
          <IoMdArrowDropright />
          <span>MySQL</span>
        </div>
      </div>
    </motion.div>
  );
}
