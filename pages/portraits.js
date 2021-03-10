import NavBar from "./components/navBar";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Head from "next/head";
import { client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import styles from "../styles/Product.module.css";
import { useRouter } from "next/router";

export default function Portraits(props) {
  // list of uid's
  const uidList = props?.posts?.results.map((post) => post.uid);
  console.log("---------------UIDLISTS---------------");
  console.log(uidList);

  const printList = uidList.filter((uidList) => uidList.length < 8);
  console.log("---------------PRINTS---------------");
  console.log(printList);

  const portraitList = uidList.filter((uidList) => uidList.length > 8);
  console.log("---------------PORTRAITS---------------");
  console.log(portraitList);

  // TODO: use printList and portraitList as a filter for the products page
  return (
    <div className={styles.container}>
      <Head>
        <title>BMA | Products</title>
      </Head>
      <NavBar />

      <main className={styles.main}>
        <h1 className="text-gray-900 text-center font-semibold text-6xl leading-tight">
          Products
        </h1>
        <p className="text-gray-600 text-center font-normal text-lg leading-thin">
          Many many products
        </p>
      </main>

      <div className={styles.grid}>
        {props?.posts?.results.map((post) => (
          <div key={post?.uid} className={styles.card}>
            <Link href={`/products/${post.uid}`}>
              <a>
                <img
                  className="object-cover shadow-xl"
                  src={post?.data?.image?.url}
                  alt={post?.data?.image?.alt}
                />
                <div className="p-6">
                  <p className="font-semibold text-md leading-tight truncate">
                    {RichText.asText(post?.data?.title)}
                  </p>
                  <p className=" text-sm leading-tight truncate">
                    {RichText.asText(post?.data?.description)}
                  </p>
                  <p className="mt-1">£ TBC </p>
                  <p className="text-gray-900 text-sm mt-4">
                    More information &rarr;
                  </p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "portraits"),
    { orderings: "[my.post.date desc]" }
  );

  return {
    props: {
      posts,
    },
  };
}
