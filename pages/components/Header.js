import NavBar from "./navBar";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 4rem;
  position: relative;
  z-index: 2;
  background: rgb(5, 213, 196);
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          {/* TODO: replact the text with acutal logo. Change the logo depending on the page */}
          <Link href="./">Beffy</Link>
        </Logo>
        <NavBar />
      </div>
    </HeaderStyles>
  );
}
