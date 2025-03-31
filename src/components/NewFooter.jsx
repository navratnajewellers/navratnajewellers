import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

import '../styles/newHeader.css';

const NewFooter = () => {
  return (
    <>
      {/* Contact & Store Info */}
      <footer className="footer">
        <h2>Visit Us</h2>
        <div className="contact-info">
          <div>
            <FaMapMarkerAlt />
            <span>Beside Gurudwara, Main Road, Ranchi, India, Jharkhand</span>
          </div>
          <div>
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>
          <div>
            <FaEnvelope />
            <span>contact@navratnajewellers.com</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NewFooter;
