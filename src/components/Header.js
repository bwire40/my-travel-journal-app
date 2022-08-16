/* eslint-disable jsx-a11y/alt-text */
import img from "../images/everest.jpg";

function Header() {
  return (
    <header>
      <img src={img} />
      <div className="hero-items">
        <h1>Journey with Me</h1>
        <button>Get In Touch {">>"}</button>
      </div>
    </header>
  );
}
export default Header;
