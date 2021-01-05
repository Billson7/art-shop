import Link from "next/link";

export default function NavBar() {
  const navStyle = "h-12 w-screen text-center bg-gray-300 shadow-md";
  const navBarItem = "leading-loose mx-8 p-2 hover:underline rounded-lg ";
  return (
    <div id="navbar" className={navStyle}>
      <div id="heading" className="flex">
        <Link href="/">
          <a className={navBarItem}>Home</a>
        </Link>
        <Link href="/portraits">
          <a className={navBarItem}>Portraits</a>
        </Link>
        <Link href="/prints">
          <a className={navBarItem}>Prints</a>
        </Link>
        <Link href="/giftcards">
          <a className={navBarItem}>Giftcards</a>
        </Link>
      </div>
    </div>
  );
}
