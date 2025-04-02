import styles from "./project_card.module.css";
import Button from "../buttons/button";

export default function Card({ project }) {
  return (
    <div className={styles.card}>
      {/* vide */}
      <div className={styles.card__video_container}></div>
      {/* body */}
      <div className={styles.card__body_container}>
        <a href={project.link_app} target="_blank" rel="noopener noreferrer">
          <h3 className={styles.card__body_title}>{project.title}</h3>
        </a>
        <p className={styles.card__body_description}>{project.description}</p>
        <div className={styles.card__tech_contaienr}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.card__techo_item}>
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link_code} target="_blank" rel="noopener noreferrer">
          <Button content={"Code"} />
        </a>
      </div>
    </div>
  );
}
