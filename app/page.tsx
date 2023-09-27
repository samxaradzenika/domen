import Head from "next/head";
import Header from "@/components/Masthead/Masthead";
import NavBar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import {Hero} from "@/components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Domenebi</title>
        <meta name="description" content="Domenebi.ge try it out" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <NavBar />
      <Banner />
      <div className={styles.main}>
        <Hero />
      </div>
    </>
  );
}
