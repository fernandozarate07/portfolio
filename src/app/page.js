import styles from "./page.module.css";
import Hero from "@/components/hero/hero";
import Experience from "@/components/experience/experience";
import Studies from "@/components/studies/styudies";
import Project from "@/components/project_section/project";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Project />
        <Experience />
        <Studies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
