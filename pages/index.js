import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "./components/navBar.js";

export default function Home() {
  const genericStyle = "h-56 w-9/12 text-center bg-gray-300 mt-2 rounded-lg ";

  return (
    <div className={styles.container}>
      <Head>
        <title>Beth Miller Art</title>
      </Head>
      <NavBar />

      <main className={styles.main}>
        <div id="heading">
          <h1 className="font-sans text-6xl">Welcome to Art</h1>
        </div>
        <div id="commissions" className={genericStyle}>
          Portraits
        </div>
        <div id="prints" className={genericStyle}>
          Prints
        </div>
        <div id="giftcard" className={genericStyle}>
          Giftcard
        </div>
        {/*TODO redo the coffee shop concept site, but for Beth's art*/}
      </main>

      <footer className={styles.footer}>
        <a>Powered by Caffeine</a>
      </footer>
    </div>
  );
}
