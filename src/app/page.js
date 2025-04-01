import styles from "./page.module.css";
import data_projects from "./data_projects.json";
import data_experiences from "./data_experiences.json";
import data_studies from "./data_studies.json";

import Card from "../components/project_card/project_card";
import Box from "../components/box/box";
import Button from "@/components/button/button";

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
            Diseño con carácter, experiencias fluidas y alto rendimiento. Tu web, reflejo de tu identidad.
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
          <div className={styles.studies__resume_container}>
            <p className={styles.studies__resume_p}>Puedes descargar mi curriculum vitae desde aqui.</p>
            <Button content={"Descargar cv"} />
          </div>
        </div>
        {/* contact */}
        <div className={styles.contact}>
          <h2 className={styles.contact__title}>Contacto</h2>
          <div className={styles.contact__container}>
            <p className={styles.contact__p}>
              Escríbeme a fernandozarate.dev@gmail.com, estaré encantado de escucharte.
            </p>
            <div className={styles.contact__btns_container}>
              <Button content={"Github"} />
              <Button content={"Gmail"} />
              <Button content={"Instagram"} />
              <Button content={"Linkedin"} />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© 2025 fernando .</span>
        <span>Casi todos los derechos reservados</span>
      </footer>
    </div>
  );
}
