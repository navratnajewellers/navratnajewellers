import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { IoLocation } from '@react-icons/all-files/io5/IoLocation';

const HomeConnectUs = () => {
  return (
    <div className="home-connect-us-container dis-flex">
      <div className="connect-us-wrapper">
        <div>
          <div>
            <h4>Connect On</h4>
            <h3>
              <strong>WhatsApp</strong>
            </h3>
          </div>
          <div className="header-text-connect dis-flex">
            <a>Connect</a>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="header-connectus-icon">
          <FaWhatsapp className="height-width-100" />
        </div>
      </div>
      <div className="connect-us-wrapper">
        <div>
          <div>
            <h4>Book an</h4>
            <h3>
              <strong>Appointment</strong>
            </h3>
          </div>
          <div className="header-text-connect dis-flex">
            <a>Book</a>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="header-connectus-icon">
          <IoLocation className="height-width-100" />
        </div>
      </div>
    </div>
  );
};

export default HomeConnectUs;
