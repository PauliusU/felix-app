import "./index.scss";
import creditCards from "../../../assets/credit-cards.svg";

function Footer() {
  return (
    <footer className="footer">
      <p>We care about your entertainment. Copyright © 2019–2021 felix.com</p>
      <img src={creditCards} alt="credit cards" />
    </footer>
  );
}

export default Footer;
