import { Divider } from 'rsuite';
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
      <Divider />
      <div className="footer-container dis-flex textCenter">
        <div className="footer-connectus-container textStart">
          <div>
            <h3>Contact Us</h3>
          </div>
          <ul>
            <li>
              <span className="footer-icon-wrapper">
                <IoIosMail className="footer-icon" />
              </span>
              <span>Write to Us</span>
            </li>
            <li>
              <span className="footer-icon-wrapper footer-call-icon">
                <IoCallOutline className="footer-icon" />
              </span>
              <span>1234567890</span>
            </li>
            <li>
              <span className="footer-icon-wrapper footer-loc-icon">
                <FaLocationArrow className="footer-icon" />
              </span>
              <span>Find Store</span>
            </li>
          </ul>
        </div>
        <div className="footer-useful-info-container">
          <div>
            <h3>Information</h3>
          </div>
          <ul>
            <li>
              <span>Offers & Contest Details</span>
            </li>
            <li>
              <span>About Navratna Jewellers</span>
            </li>
          </ul>
        </div>
        <div className="footer-social-media-container">
          <div>
            <h3>Follow Us On</h3>
          </div>
          <div>
            <a href="" target="_blank">
              <span>
                <FaFacebookF />
              </span>
            </a>
            <a href="" target="_blank">
              <span>
                <FaInstagram />
              </span>
            </a>
            <a href="" target="_blank">
              <span>
                <FaYoutube />
              </span>
            </a>
            <a href="" target="_blank">
              <span>
                <FaPinterest />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <strong>
          <small>Copyright &copy;2024</small>
        </strong>
      </div>
    </div>
  );
};

export default Footer;
