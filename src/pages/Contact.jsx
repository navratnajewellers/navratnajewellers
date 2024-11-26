import '../styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="main-container">
        <div className="imageWrapper">
          <img src="/1920X1350-min.jpg" alt="Navratna Jewellers" />
        </div>
        <div className="inner-pad pad-mid">
          <a
            className="textCenter"
            href="https://api.whatsapp.com/send?phone=917004220367"
          >
            Whatapp
          </a>
          <a className="textCenter cursorPointer" href="">
            Call: +91 7004220367
          </a>
          <a
            className="textCenter cursorPointer"
            href="https://maps.app.goo.gl/mzKSgSyRAtaYwsWA9"
          >
            Get Direction
          </a>
          <a
            className="textCenter cursorPointer"
            href="https://g.page/r/CUgkT65-GovLEB0/review"
          >
            Write Review
          </a>
        </div>
        <div className="pad-large">
          <h1 className="textCenter">CONNECT WITH US:</h1>
          <div className="inner-pad">
            <a
              className="textCenter cursorPointer"
              href="https://www.facebook.com/navratna.jewellersranchi?mibextid=LQQJ4d"
            >
              Facebook
            </a>
            <a
              className="textCenter cursorPointer"
              href="https://www.instagram.com/navratnajewellers?igsh=NDNnOTI4M29ocG42"
            >
              Instagram
            </a>
            <a
              className="textCenter cursorPointer"
              href="https://www.youtube.com/channel/UCJtHOvMfpXb1MJUqURk8Orw"
            >
              Youtube
            </a>
            <a
              className="textCenter cursorPointer"
              href="https://in.pinterest.com/navratnajewellersranchi"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
