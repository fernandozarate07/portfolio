"use client";
import styles from "./button.module.css";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "motion/react";

export default function Button({ content }) {
  const handle_download_pdf = () => {
    const pdfUrl = "/resume/fernando_zarate_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "fernando_zarate_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.button
      animate={{ background: "rgba(0, 0, 0, 0.2)" }} // Estado base
      whileHover={{
        background: ["rgba(0, 0, 0, 0.2)", "#000000", "rgba(0, 0, 0, 0.2)"],
        transition: { duration: 2, repeat: Infinity },
      }}
      exit={{ background: "rgba(0, 0, 0, 0.2)" }} // Asegura que vuelva al original
      className={styles.button}
      onClick={handle_download_pdf}>
      <span>{content}</span>
      <FaFileDownload />
    </motion.button>
  );
}
