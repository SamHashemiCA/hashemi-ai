import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Github from "../components/logo/github";
import Linkedin from "../components/logo/Linkedin";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Hashemi personal website</title>
        <meta
          name="description"
          content="This is Sam Hashemi's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sam Hashemi</h1>

        <div className={styles.avatar}>
          <Image
            src="https://media-exp1.licdn.com/dms/image/C5103AQHHaACLQZImXQ/profile-displayphoto-shrink_400_400/0/1516559447278?e=1671062400&v=beta&t=tH2xjxEA6NUVmNc7ULbPcHX9wiO_Wi9mKZbC_tPoo9U"
            alt="iman heidari"
            width={100}
            height={100}
          />
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/SamHashemiCA/">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/samhashemi-ai/">
            <Linkedin />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
