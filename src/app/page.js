import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={180} height={38} priority /> */}
        <div className={styles.hero}>
          <h1 className={styles.hero__name}>Fernando Zárate</h1>
          <h2 className={styles.hero__rol}>Full Stack Designer</h2>
          <p className={styles.hero__description}>
            Diseño con carácter, experiencias fluidas y alto rendimiento. Tu web, reflejo de tu identidad.
          </p>
        </div>
        <div className={styles.project}>
          <h2 className={styles.project__title}></h2>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
