import styles from "./project_card.module.css";
import Button from "../button/button";

export default function Card({ project }) {
  return (
    <div className={styles.card}>
      {/* vide */}
      <div className={styles.card__video_container}></div>
      {/* body */}
      <div className={styles.card__body_container}>
        <h3 className={styles.card__body_title}>{project.title}</h3>
        <p className={styles.card__body_description}>{project.description}</p>
        <div className={styles.card__tech_contaienr}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.card__techo_item}>
              {tech}
            </span>
          ))}
        </div>
        <Button content={"Code"} />
      </div>
    </div>
  );
}
