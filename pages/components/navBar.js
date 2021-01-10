import Link from "next/link";
import styles from "../../styles/navbar.module.css";

export default function NavBar() {
  const navStyle = "h-12 w-screen text-center shadow-md";
  const navBarItem =
    "leading-loose sm:mx-2 md:mx-4 lg:mx-8 p-2 hover:underline rounded-lg ";
  return (
    <span className={styles.navBar}>
      <div id="navbar" className={navStyle}>
        <div id="heading" className="flex">
          <Link href="/">
            <a className={navBarItem}>Home</a>
          </Link>
          <Link href="/portraits">
            <a className={navBarItem}>Portraits</a>
          </Link>
          <Link href="/coming-soon">
            <a className={navBarItem}>Prints</a>
          </Link>
          <Link href="/coming-soon">
            <a className={navBarItem}>Giftcards</a>
          </Link>
        </div>
      </div>
    </span>
  );
}
