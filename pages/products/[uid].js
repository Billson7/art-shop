import Link from "next/link";
import styles from "../../styles/singleProduct.module.css";
import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../components/navBar";

function Product(props) {
  const router = useRouter();
  const { uid } = router.query;

  const currentUid = props.posts?.uid;
  const targetUid = "portrait";
  const pageType = () => {
    const pageUid = currentUid.includes(targetUid)
      ? "£ TBC"
      : `£${props.posts.data?.price}`;
    return pageUid;
  };

  const returnPage = () => {
    const determinePage = currentUid.includes(targetUid)
      ? "/portraits"
      : "/prints";
    return determinePage;
  };

  const priceLabel = () => {
    const label = currentUid.includes(targetUid)
      ? "/ per portrait"
      : "/ per print";
    return label;
  };

  const cmsRoute = () => {
    const label = currentUid.includes(targetUid) ? "posts" : "prints";
    return label;
  };

  const productInformation = () => {
    const label = currentUid.includes(targetUid)
      ? RichText.render(props?.posts?.data?.portraitInfo) ||
        RichText.render(props?.prints?.data?.printInfo)
      : {};
    return label;
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>
          {RichText.asText(props.posts?.data?.title) ||
            RichText.asText(props.prints?.data?.title)}
        </title>
      </Head>

      <NavBar />

      <section className={styles.main}>
        <div className="flex flex-col md:flex-row">
          <div className=" m-auto w-10/12 md:w-5/12">
            <img
              className="object-contain rounded-xl shadow-xl m-1 md:m-4"
              src={props?.posts?.data?.image?.url}
              alt={props?.posts?.data?.image?.alt}
            />
          </div>
          <div className="m-auto w-9/12 md:w-5/12">
            <h1 className="text-gray-900 font-semibold text-3xl leading-tight mt-2">
              {RichText.asText(
                props?.posts?.data?.title || props?.prints?.data?.title
              )}
            </h1>
            <p className="mt-2">
              {pageType()}
              <span className="text-gray-600 text-sm mt-6">
                {" "}
                {priceLabel()}
              </span>
            </p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-6">
              Add to Bag
            </button>
            <p className="text-gray-900 font-normal text-base leading-tight mt-6">
              {RichText.asText(
                props?.posts?.data?.description ||
                  props?.prints?.data?.description
              )}
            </p>
            <div>
              <p className="text-gray-900 font-semibold text-md leading-relaxed mt-6">
                {productInformation()}
              </p>
            </div>

            <Link href={`${returnPage()}`}>
              <a>
                <div className="text-gray-600 text-sm mt-6">&larr; Go Back</div>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;

export async function getStaticPaths() {
  const res = await client.query(
    Prismic.Predicates.at("document.type", "portraits" || "prints"),
    {
      orderings: "[my.post.date desc]"
    }
  );

  const paths = res?.results?.map(({ uid }) => ({ params: { uid } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = (await client.getByUID("portraits", `${params.uid}`)) || null;
  const prints = (await client.getByUID("prints", `${params.uid}`)) || null;

  return {
    props: {
      posts,
      prints
    }
  };
}
