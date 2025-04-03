"use client";
import styles from "./project.module.css";
import { motion } from "motion/react";
import data_projects from "@/app/data_projects.json";
import Card from "@/components/project_card/project_card";

export default function Project() {
  const projects = data_projects;
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", x: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      viewport={{ once: true }}
      className={styles.project}>
      <h2 className={styles.project__title}>Proyectos</h2>
      <div className={styles.project__card_container}>
        <Card project={projects[0]} />
        <Card project={projects[1]} />
      </div>
    </motion.div>
  );
}
