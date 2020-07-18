import Layout from "../components/Layout";
import React, { Component } from "react";
import Head from "next/head";
import styles from "./About.module.scss";
import Link from "next/link";

export default class About extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>About YardSold</title>
        </Head>
        <div className={styles.wrapper}>
          <h1 className={styles.header}>About</h1>
          <Link href={"/index"}>
            <a className={styles.link}>Go to Home</a>
          </Link>
        </div>
      </Layout>
    );
  }
}
