import Menu from "./menu/Menu";
import styles from "./Layout.module.scss";
import Head from "next/head";
import Footer from "./footer/Footer";

const Layout = ({ children }) => (
  <div>
    <Head>
      <Menu />
    </Head>
    <nav></nav>
    <div className={styles.wrapper}>
      <div className={styles.contentwrapper}>{children}</div>
      <div className={styles.footerwrapper}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
