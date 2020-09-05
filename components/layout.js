import Menu from "./menu/Menu";
import styles from "./Layout.module.scss";
import Head from "next/head";
import Footer from "./footer/Footer";
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  })
})


const query = gql`
query {
  allItems {
    name
    price
    description
  }
}
`

client.query({ query })
  .then((response) => {
    console.log(response.data);
  });

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
