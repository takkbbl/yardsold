import Layout from "../components/layout";
import React, { Component } from "react";
import Head from "next/head";
import styles from "./Index.module.scss";
import Link from "next/link";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>YardSold</title>
        </Head>
        <div className={styles.wrapper}>
          <h1 className={styles.header}>YardSold</h1>
          <Link href="/about">
            <a className={styles.link}>Go to about</a>
          </Link>
        </div>
      </Layout>
    );
  }
}
