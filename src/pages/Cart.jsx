import { Button, Message, useToaster } from 'rsuite';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Cart = () => {
  const toaster = useToaster();

  // const message = (
  //   <Message showIcon type="info" closable>
  //     <strong>Info!</strong> The message appears on the Top.
  //   </Message>
  // );

  const displayMessage = (type, message) => {
    toaster.push(
      <Message showIcon type={type} closable>
        <strong>{type}!</strong> {message}
      </Message>,
      { placement: 'topCenter', duration: 5000 }
    );
  };

  const handleMessage = () => {
    console.log('message before alert message');
    displayMessage('info', 'message');
  };

  return (
    <div>
      <div className="header-container margin-t10">
        <Header />
      </div>
      <div className="dis-flex">
        <img src="/empty-cart-no-empty.png" alt="Empty cart"></img>
        <h1>Cart is Empty</h1>
        <div>
          <Button
            onClick={() =>
              displayMessage('info', 'The message appears on the top.')
            }
            appearance="primary"
          >
            Push
          </Button>
          <Button onClick={() => handleMessage()}>Show Alert</Button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
