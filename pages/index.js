import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "./components/navBar.js";
import { client } from "../prismic-configuration";

export default function Home(props) {
  const genericStyle = "h-56 w-9/12 text-center bg-gray-300 mt-2 rounded-lg ";
  const imagePrintSrc = props.home.data.printimage?.url;
  return (
    <div className={styles.container}>
      <Head>
        <title>Beth Miller Art</title>
      </Head>
      <NavBar />

      <main className={styles.main}>
        <div id="heading">
          <h1 className="text-6xl">Welcome to Art</h1>
        </div>
        <div className="mt-20 grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 box-content h-96 w-48 p-5 rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Portraits
          </div>
          <div
            style={{
              backgroundImage: `url(${imagePrintSrc})`,
              backgroundPosition: "50%, 50%",
              backgroundSize: "cover"
            }}
            className="col-span-2 box-content h-40 w-48 p-5 rounded-lg text-white text-center"
          >
            Prints - Coming Soon!
          </div>
          <div className="mt-2 row-span-2 col-span-2 box-content h-40 w-48 p-5 rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Giftcard - Coming Soon!
          </div>
        </div>

        <div id="prints" className={genericStyle}>
          Prints - Coming Soon!
          {/*<img*/}
          {/*  className="w-auto overflow-hidden object-fill"*/}
          {/*  src={imagePrintSrc}*/}
          {/*  alt={props?.home?.alt}*/}
          {/*/>*/}
          {/*{console.log("DATA", props.home.data)}*/}
        </div>

        {/*TODO homepage*/}
        {/*TODO giftcard page*/}
        {/*TODO [UID] page for prints and giftcards*/}
      </main>

      <footer className={styles.footer}>
        <a>Powered by Caffeine</a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const home = await client.getSingle("home-print");

  return {
    props: {
      home
    }
  };
}
