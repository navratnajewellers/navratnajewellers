import { Affix } from 'rsuite';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ReturnPolicy = () => {
  // move to top of window wgen user on different section of other page
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="margin-t50 padding-lr5 margin-b100">
        <h3 className="main-color textCenter margin-b30">RETURN REQUESTS</h3>
        <p>
          Note that neither the Company nor the Platform shall at any given
          point of time entertain any request in any manner towards the
          Cancellation and Refund of the payment made by the user towards the
          services delivered services to you.
        </p>

        <p>
          Upon your purchase of the products through the Company’s Platform, you
          do not have the right to place a return request or process a return
          request on the Platform. The Company deals in Gold and Silver items
          and hence, return of the goods or products once delivered is not
          possible.
        </p>

        <p>
          You shall not be allowed to return the goods once delivered by the
          Company under any circumstances whatsoever. The Users may exchange the
          products the Platform shall provide exchange based on various external
          factors such as market-rate &amp; wastage as per market standard at
          the sole cost and expenses of the User as mentioned on the Platform.
        </p>

        <p>
          If the goods so delivered is damage when received, not delivered or
          any transaction processing error has happened the User may raise a
          request for new product by contacting the customer care at
          +91-7004220367 within 24 hours from the delivery of the product.
        </p>

        <p>
          A return request shall be made only upon the Customer has sufficient
          proofs for the product to be damaged on delivery or the product so
          delivered is incorrect.
        </p>

        <p>
          The Return or the Refund process shall be not be undertaken by the
          Platform if the Customer or the User does not have sufficient proofs
          towards the same.
        </p>

        <p>
          All requests shall be made by the User by emailing to
          navratnajewellers0@gmail.com which will be the official mode of
          communication with the Platform and the Company. The Company shall
          waive all other means of communication made.
        </p>

        <h3 className="main-color textCenter margin-t50 margin-b30">
          CANCELLATION
        </h3>
        <p>
          As a User, you do not have the right to cancel your order upon placing
          the same.
        </p>

        <p>The Company at its sole discretion may cancel any order(s): </p>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
};

export default ReturnPolicy;
