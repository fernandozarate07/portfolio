import styles from "./page.module.css";
import data_projects from "./data_projects.json";
import data_experiences from "./data_experiences.json";
import data_studies from "./data_studies.json";

import Card from "../components/project_card/project_card";
import Box from "../components/box/box";
import Button from "@/components/buttons/button";
import Button_resumen from "@/components/buttons/button_resume";

export default function Home() {
  const projects = data_projects;
  const experience = data_experiences;
  const studies = data_studies;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* hero */}
        <div className={styles.hero}>
          <h1 className={styles.hero__name}>Fernando Zárate</h1>
          <h2 className={styles.hero__rol}>Full Stack Designer</h2>
          <p className={styles.hero__description}>
            Mi objetivo es diseñar webs con carácter, donde funcionalidad y estética se fusionen para ir más allá de su
            propósito y reflejar auténticamente la identidad de la marca.
          </p>
        </div>
        {/* project */}
        <div className={styles.project}>
          <h2 className={styles.project__title}>Proyectos</h2>
          <div className={styles.project__card_container}>
            <Card project={projects[0]} />
            <Card project={projects[1]} />
          </div>
        </div>
        {/* experience */}
        <div className={styles.experience}>
          <h2 className={styles.experience__title}>Experiencia</h2>
          <div className={styles.experience__box_container}>
            <Box content={experience[0]}></Box>
          </div>
        </div>
        {/* studies */}
        <div className={styles.studies}>
          <h2 className={styles.studies__title}>Estudios</h2>
          <div className={styles.studies__box_container}>
            <Box content={studies[0]}></Box>
            <Box content={studies[1]}></Box>
          </div>
        </div>
        {/* contact */}
        <div className={styles.contact}>
          <h2 className={styles.contact__title}>Contacto</h2>
          <div className={styles.contact__container}>
            <p className={styles.contact__p}>
              Escríbeme a{" "}
              <a
                href="mailto:fernandozarate.dev@gmail.com?subject=Hola%20Fer!"
                target="_blank"
                rel="noopener noreferrer">
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
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© 2025 fernando zárate</span>
        <span>Casi todos los derechos reservados</span>
      </footer>
    </div>
  );
}
