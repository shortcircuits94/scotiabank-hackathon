import "./Footer.scss";
import facebook from "../../assets/icons/facebook.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import message from "../../assets/icons/message.svg";
import phone from "../../assets/icons/phone.svg";
import question from "../../assets/icons/question.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__help">
        <div className="footer__card">
          <img className="footer__icon" src={question} />
          <h4 className="footer__text">Have a question?</h4>
          <p className="footer__text">We have an answer.</p>
          <p className="footer__text footer__text--underline">Help Centre</p>
        </div>
        <div className="footer__card">
          <img className="footer__icon" src={phone} />
          <h4 className="footer__text">Call Scotiabank</h4>
          <p className="footer__text">1.800.4SCOTIA</p>
          <p className="footer__text footer__text--underline">
            More phone numbers
          </p>
        </div>
        <div className="footer__card">
          <img className="footer__icon" src={message} />
          <h4 className="footer__text">Get advice</h4>
          <p className="footer__text">Meet with an advisor.</p>
          <p className="footer__text footer__text--underline">
            Book an appointment
          </p>
        </div>
        <div className="footer__social-container">
          <img className="footer__social" src={facebook} />
          <img className="footer__social" src={twitter} />
          <img className="footer__social" src={youtube} />
          <img className="footer__social" src={linkedIn} />
          <img className="footer__social" src={instagram} />
        </div>
      </div>
      <div className="footer__info">
        <p className="footer__info-text">Careers</p>
        <p className="footer__info-text">Security and Fraud</p>
        <p className="footer__info-text">Legal</p>
        <p className="footer__info-text">Privacy</p>
        <p className="footer__info-text">Accessibility</p>
        <p className="footer__info-text">Cookie Settings</p>
      </div>
      <div className="footer__copyrite">
        © Scotiabank.com All Rights Reserved
      </div>
    </section>
  );
}

export default Footer;
