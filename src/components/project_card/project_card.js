import styles from "./project_card.module.css";
import Button from "../buttons/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Card({ project }) {
  return (
    <div className={styles.card}>
      {/* Contenedor de video/imagen */}
      <div className={styles.card__video_container}>
        {project.link_video && project.link_video !== null ? (
          <video autoPlay muted loop playsInline className={styles.card__video_img}>
            <source src={project.link_video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="unexo.svg"
            alt={`Placeholder para ${project.title}`}
            fill
            className={styles.card__video_img}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        )}
      </div>
      {/* body */}
      <div className={styles.card__body_container}>
        <a href={project.link_app} target="_blank" rel="noopener noreferrer">
          <motion.h3
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={styles.card__body_title}>
            {project.title}
          </motion.h3>
        </a>
        <p className={styles.card__body_description}>{project.description}</p>
        <div className={styles.card__tech_contaienr}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.card__techo_item}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.card__body_codeLinks_container}>
          {project.link_frontend && (
            <a href={project.link_frontend} target="_blank" rel="noopener noreferrer">
              <Button content="code frontend" />
            </a>
          )}
          {project.link_backend && (
            <a href={project.link_backend} target="_blank" rel="noopener noreferrer">
              <Button content="code backend" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
