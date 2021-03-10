import Link from "next/link";
import NavStyle from "./styles/NavStyle";
export default function NavBar() {
  return (
    <nav>
      <NavStyle>
        <Link href="/">Home</Link>
        <Link href="/portraits">Products</Link>
        <Link href="/coming-soon">Giftcards</Link>
      </NavStyle>
    </nav>
  );
}
