import "./Footer.css";
/* import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia"; */

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content row ">
          <ul className="intro col-lg-4 ">
            <h3 className="logo">
              <img src="/assets/images/Isolation_Mode.svg" alt="EduPress" />
              <span className="text">EduPress</span>
            </h3>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
          </ul>
          <div className="info row col">
            <ul className="pages col-lg-4 col-md-4">
              <h3>GET HELP</h3>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Latest Articles</p>
              </li>
              <li>
                <p>FAQ</p>
              </li>
            </ul>
            <ul className="others col-lg-4 col-md-4">
              <h3>PROGRAMS</h3>
              <li>
                <p>Art & Design</p>
              </li>
              <li>
                <p>Business</p>
              </li>
              <li>
                <p>IT & Software</p>
              </li>
              <li>
                <p>Languages</p>
              </li>
              <li>
                <p>Programming</p>
              </li>
            </ul>
            <div className="contact-infos col-lg-4 col-md-4">
              <h3>CONTACT US</h3>
              <div className="contact-info">
                <p>
                  Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA
                </p>
              </div>
              <div className="contact-info ">
                <p>Tel: + (123) 2500-567-8988</p>
              </div>
              <div className="contact-info">
                <p>Mail: supportlms@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
      </div>
    </footer>
  );
};

export default Footer;
