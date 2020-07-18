import Menu from "./menu/Menu";
import styles from "./Layout.module.scss";
import Head from "next/head";
import Footer from "./footer/Footer";

const Layout = ({ children }) => (
  <div>
    <Head></Head>
    <nav>
      <Menu />
    </nav>
    <main className={styles.wrapper}>
      <section className={styles.contentwrapper}>{children}</section>
      <footer className={styles.footerwrapper}>
        <Footer />
      </footer>
    </main>
  </div>
);

export default Layout;
