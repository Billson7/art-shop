import NavBar from "./components/navBar";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Head from "next/head";
import { client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import styles from "../styles/Product.module.css";

export default function Prints(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>BMA | Prints</title>
      </Head>
      <NavBar />

      <main className={styles.main}>
        <h1 className="text-gray-900 text-center font-semibold text-6xl leading-tight">
          Prints
        </h1>
        <p className="text-gray-600 text-center font-normal text-lg leading-thin">
          Many many prints
        </p>
      </main>

      <div className={styles.grid}>
        {props?.posts?.results.map(post => (
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
                  <p className="mt-1">
                    £{post?.data?.price}{" "}
                    <span className="text-gray-600 text-sm">/ per print</span>
                  </p>

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
    Prismic.Predicates.at("document.type", "prints"),
    { orderings: "[my.post.date desc]" }
  );

  return {
    props: {
      posts
    }
  };
}
