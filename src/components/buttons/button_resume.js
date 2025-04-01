"use client";
import styles from "./button.module.css";
import { FaFileDownload } from "react-icons/fa";

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
    <button className={styles.button} onClick={handle_download_pdf}>
      <span>{content}</span>
      <FaFileDownload />
    </button>
  );
}
