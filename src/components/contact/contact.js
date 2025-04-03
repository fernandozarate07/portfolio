"use client";
import styles from "./contact.module.css";
import { motion } from "motion/react";
import Button from "@/components/buttons/button";
import Button_resumen from "../buttons/button_resume";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", x: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      viewport={{ once: true }}
      className={styles.contact}>
      <h2 className={styles.contact__title}>Contacto</h2>
      <div className={styles.contact__container}>
        <p className={styles.contact__p}>
          Escríbeme a{" "}
          <a href="mailto:fernandozarate.dev@gmail.com?subject=Hola%20Fer!" target="_blank" rel="noopener noreferrer">
            fernandozarate.dev@gmail.com
          </a>
        </p>
        <div className={styles.contact__btns_container}>
          <a href="https://github.com/fernandozarate07" target="_blank" rel="noopener noreferrer">
            <Button content={"Github"} />
          </a>
          <a href="https://www.instagram.com/zarate.fernando.delvalle" target="_blank" rel="noopener noreferrer">
            <Button content={"Instagram"} />
          </a>
          <a href="https://www.linkedin.com/in/fernandozaratedev" target="_blank" rel="noopener noreferrer">
            <Button content={"Linkedin"} />
          </a>
        </div>
      </div>
      <div className={styles.contact__resume_container}>
        <p className={styles.contact__resume_p}>¿Quieres más información?</p>
        <Button_resumen content={"Currículum Vitae"} />
      </div>
    </motion.div>
  );
}
