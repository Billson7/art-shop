import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "./components/navBar.js";
import { client } from "../prismic-configuration";
import Link from "next/link";
export default function Home(props) {
  const imagePortraitSrc = props.homePortrait.data.portraitimage?.url;
  const imagePrintSrc = props.homePrint.data.printimage?.url;
  const imageGiftcardSrc = props.homeGiftcard.data.giftcardimage?.url;
  return (
    <div className={styles.container}>
      <Head>
        <title>Beth Miller Art</title>
      </Head>
      <NavBar />

      <main className={styles.main}>
        <div id="heading">
          <h1 className="text-5xl text-center">Welcome to Art</h1>
        </div>
        <div className="mt-20 grid grid-rows-3 grid-flow-col gap-4">
          <Link href="/portraits">
            <div
              style={{
                backgroundImage: `url(${imagePortraitSrc})`,
                backgroundSize: "cover"
              }}
              className="row-span-3 box-content h-96 w-48 p-5 rounded-lg text-white text-center shadow-md cursor-pointer"
            >
              <a>Portraits</a>
            </div>
          </Link>
          <Link href="/coming-soon">
            <div
              style={{
                backgroundImage: `url(${imagePrintSrc})`,
                backgroundSize: "cover"
              }}
              className="col-span-2 box-content h-40 w-48 p-5 rounded-lg text-white text-center shadow-md cursor-pointer"
            >
              Prints - Coming Soon!
            </div>
          </Link>
          <Link href="/coming-soon">
            <div
              style={{
                backgroundImage: `url(${imageGiftcardSrc})`,
                backgroundSize: "cover"
              }}
              className="mt-2 row-span-2 col-span-2 box-content h-40 w-48 p-5 rounded-lg text-center shadow-md cursor-pointer"
            >
              Giftcard - Coming Soon!
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>Powered by Caffeine</a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const homePortrait = await client.getSingle("home-portrait");
  const homePrint = await client.getSingle("home-print");
  const homeGiftcard = await client.getSingle("home-giftcard");

  return {
    props: {
      homePortrait,
      homePrint,
      homeGiftcard
    }
  };
}
