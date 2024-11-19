import { IoIosMail } from '@react-icons/all-files/io/IoIosMail';
import { IoCallOutline } from '@react-icons/all-files/io5/IoCallOutline';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { FaPinterest } from '@react-icons/all-files/fa/FaPinterest';
import { FaLocationArrow } from '@react-icons/all-files/fa/FaLocationArrow';

const Footer = () => {
  return (
    <div>
      <div className="footer-container textCenter">
        <div className="footer-connectus-container textStart">
          <div>
            <h3>Contact Us</h3>
          </div>
          <ul>
            <li>
              <span className="footer-icon-wrapper">
                <IoIosMail className="footer-icon" />
              </span>
              <a href="mailto:navratnajewellers0@gmail.com">Write to Us</a>
            </li>
            <li>
              <span className="footer-icon-wrapper footer-call-icon">
                <IoCallOutline className="footer-icon" />
              </span>
              <a href="tel:+91 7004220367">7004220367</a>
            </li>
            <li>
              <span className="footer-icon-wrapper footer-loc-icon">
                <FaLocationArrow className="footer-icon" />
              </span>
              <a href="https://maps.app.goo.gl/mzKSgSyRAtaYwsWA9">Find Store</a>
            </li>
          </ul>
        </div>
        <div className="footer-useful-info-container">
          <div>
            <h3>Information</h3>
          </div>
          <ul>
            <li>
              <a href="">Offers & Contest Details</a>
            </li>
            <li>
              <a href="">About Navratna Jewellers</a>
            </li>
          </ul>
        </div>
        <div className="footer-social-media-container">
          <div>
            <h3>Follow Us On</h3>
          </div>
          <div>
            <a
              href="https://www.facebook.com/navratna.jewellersranchi?mibextid=LQQJ4d"
              target="_blank"
            >
              <span className="social-media-icon-wrapper">
                <FaFacebookF className="footer-icon icon-facebook" />
              </span>
            </a>
            <a
              href="https://www.instagram.com/navratnajewellers?igsh=NDNnOTI4M29ocG42"
              target="_blank"
            >
              <span className="social-media-icon-wrapper">
                <FaInstagram className="footer-icon icon-instagram" />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCJtHOvMfpXb1MJUqURk8Orw"
              target="_blank"
            >
              <span className="social-media-icon-wrapper">
                <FaYoutube className="footer-icon icon-youtube" />
              </span>
            </a>
            <a
              href="https://in.pinterest.com/navratnajewellersranchi/"
              target="_blank"
            >
              <span className="social-media-icon-wrapper">
                <FaPinterest className="footer-icon icon-pinterest" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <strong>
          <small className="copyright-text">Copyright &copy;2024</small>
        </strong>
      </div>
    </div>
  );
};

export default Footer;
