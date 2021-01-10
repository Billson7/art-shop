import styles from "../styles/Home.module.css";
import NavBar from "./components/navBar.js";
import Link from "next/link";
export const ComingSoon = () => {
  const buttonTailwind =
    "mt-4 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 p-2 rounded-lg text-white";
  return (
    <div className={styles.container}>
      <head>
        <title>BMA | Coming Soon</title>
      </head>
      <NavBar />
      <main className={styles.main}>
        <h1 className="text-6xl">Coming Soon - 2021</h1>

        <Link href="/">
          <button className={buttonTailwind}>Back</button>
        </Link>
      </main>
    </div>
  );
};
export default ComingSoon;
