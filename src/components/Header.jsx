import {
  AutoComplete,
  Button,
  Dropdown,
  Form,
  InputGroup,
  Message,
  Modal,
  Nav,
  Navbar,
  Popover,
  Schema,
  useToaster,
  Whisper,
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { FaStore } from '@react-icons/all-files/fa/FaStore';
import { VscAccount } from '@react-icons/all-files/vsc/VscAccount';
import { IoIosHeartEmpty } from '@react-icons/all-files/io/IoIosHeartEmpty';
import { IoCartOutline } from '@react-icons/all-files/io5/IoCartOutline';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useProfile } from '../context/profile.context';
import CryptoJS from 'crypto-js';
import { useCart } from '../context/Cart.context';
import { useProduct } from '../context/product.context';

const autoFillData = [];

// model schema to check required data to be fill in form
const { StringType } = Schema.Types;

const signupModel = Schema.Model({
  name: StringType().isRequired('Name is required'),
  email: StringType()
    .isEmail('Enter a valid email')
    .isRequired('Email is required'),
  password: StringType()
    .minLength(6, 'Password should be atleast six character long')
    .isRequired('Password is required'),
});

const loginModel = Schema.Model({
  email: StringType()
    .isEmail('Enter a valid email')
    .isRequired('Email is required'),
  password: StringType().isRequired('Password is required'),
});

const Header = () => {
  const toaster = useToaster();
  const navigate = useNavigate();

  const signupRef = useRef();
  const loginRef = useRef();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUp] = useState(false);

  // getting the user data from profile context
  const { userData, setUserData } = useProfile();

  const { cartData, setCartData } = useCart();

  const [signupFormValue, setSignupFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loginFormValue, setLoginFormValue] = useState({
    email: '',
    password: '',
  });

  // getting the product data fro the autocomplete data
  const { productData } = useProduct();

  const [searchData, setSearchData] = useState(null);

  if (productData) {
    productData.map((data, index) => {
      autoFillData[index] = data.name;
    });
  }

  // console.log(productData);
  // console.log(autoFillData);

  // const localCartData = JSON.parse(localStorage.getItem('cart'));

  // console.log({ userData, setUserData });

  // uncomment to see the login and sign form data
  // console.log({
  //   signupName: signupFormValue.name,
  //   signupEmail: signupFormValue.email,
  //   signupPassword: signupFormValue.password,
  //   loginEmail: loginFormValue.email,
  //   loginPassword: loginFormValue.password,
  // });

  //cart Upading function with useEffect

  // for display notification message
  const displayMessage = (type, message) => {
    toaster.push(
      <Message showIcon type={type} closable>
        <strong>{message}</strong>
      </Message>,
      { placement: 'topCenter', duration: 2000 }
    );
  };

  // generate hashed session id for user
  const generateSessionId = username => {
    const timestamp = new Date().toISOString();
    const rawString = `${username}_${timestamp}`;
    const hashedSessionId = CryptoJS.SHA256(rawString).toString();
    return hashedSessionId;
  };

  //update session id for login user

  const updateSessionId = async (id, sessionId) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1/testing/update_session.php',
        {
          id: id,
          sessionId: sessionId,
        }
      );
      // setMessage(response.data.message);

      // displayMessage('info', response.data.message);
      // console.log(response.data.message);

      if (!response.data.status) {
        displayMessage('info', response.data.message);
      }
    } catch (error) {
      displayMessage('error', 'Session update failed.');
      console.log(error);
    }
  };

  // for the account login and sign in
  const renderMenu = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
      onClose();
      // console.log(eventKey);
      if (eventKey === 1) {
        // console.log('login modal is open');
        setIsLoginOpen(true);
      }
      if (eventKey === 2) {
        // console.log('sign up modal is open');
        setIsSignUp(true);
      }
      if (eventKey === 3) {
        // console.log('user dashboard is open');
        navigate('/dashboard');
      }
      if (eventKey === 4) {
        // console.log('Logout Successfully');

        // setting the user data to null or default
        setUserData({
          id: '',
          username: '',
          sessionId: '',
        });
        sessionStorage.removeItem('sessionId');

        // resetting cart data - user id data to null
        setCartData({
          id: '',
          user_id: '',
          product_id: '',
          quantity: 0,
          price: 0,
        });

        displayMessage('info', 'Logout Succesfully');

        window.location.replace('/');
      }
    };
    return (
      <Popover
        ref={ref}
        className={`${className} account-popover`}
        style={{ left, top }}
        full
      >
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item
            eventKey={1}
            className={userData.id === '' ? '' : 'dis-none-imp'}
          >
            Log In
          </Dropdown.Item>
          <Dropdown.Item
            eventKey={2}
            className={userData.id === '' ? '' : 'dis-none-imp'}
          >
            Sign Up
          </Dropdown.Item>
          <Dropdown.Item
            eventKey={3}
            className={userData.id === '' ? 'dis-none-imp' : ''}
          >
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item
            eventKey={4}
            className={userData.id === '' ? 'dis-none-imp' : ''}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };

  const handleSignUpClose = () => {
    setIsSignUp(false);
    setSignupFormValue({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
    setLoginFormValue({
      email: '',
      password: '',
    });
  };

  const handleLogin = async e => {
    // check if all the login model schema is fulfilled or not
    if (loginRef.current.check()) {
      // console.log('form values are correct');

      e.preventDefault();
      try {
        const response = await axios.post(
          'http://127.0.0.1/testing/verify_email_login.php',
          {
            email: loginFormValue.email,
            password: loginFormValue.password,
          }
        );

        displayMessage('info', response.data.message);

        //check database message for successful login

        if (response.data.message === 'Login successful') {
          // console.log(response.data);

          // move local cart item to user cart
          try {
            const hashedLocalUserId = JSON.parse(
              localStorage.getItem('localCart')
            );

            const moveCart = await axios.post(
              'http://127.0.0.1/testing/cart/local-to-cart.php',
              {
                user_id: response.data.id,
                hashedId: hashedLocalUserId,
              }
            );

            // console.log(moveCart.data);

            if (moveCart.status === 200 && moveCart.data.status == 'success') {
              // after local cart is successfully moved to user cart then apply login logic
              //generate session for user to keep login after refresh
              const sessionId = generateSessionId(response.data.username);
              // console.log(sessionId);

              setUserData({
                id: response.data.id,
                username: response.data.username,
                sessionId: sessionId,
              });

              updateSessionId(response.data.id, sessionId);

              sessionStorage.setItem('sessionId', sessionId);
              // const storedSessionId = sessionStorage.getItem('sessionId');
              // console.log('stored session id', storedSessionId);

              // updating the cart quantity
              setCartData(val => ({
                ...val,
                quantity: val.quantity - moveCart.data.movedQuantity,
              }));

              handleLoginClose();
            } else {
              console.log('moving is not successful');
            }
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        displayMessage('error', 'An error occurred during login.');
        console.log(error);
      }
    } else {
      displayMessage('warning', 'Fill all the required data');
    }
  };

  const handleSignUp = async e => {
    if (signupRef.current.check()) {
      e.preventDefault();

      try {
        const response = await fetch(
          'http://127.0.0.1/testing/new_register.php',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: signupFormValue.name,
              password: signupFormValue.password,
              email: signupFormValue.email,
            }),
          }
        );

        const data = await response.json();

        // console.log('sign up : -', data);

        if (
          data.error ===
          `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry 'try2@gmail.com' for key 'email'`
        ) {
          displayMessage('error', 'Email already exists');
        }

        if (data.message) {
          displayMessage('info', data.message);
        }

        handleSignUpClose();
      } catch (error) {
        displayMessage('error', 'An error occurred during signup.');
        console.log(error);
      }
    } else {
      displayMessage('warning', 'Fill all the required data');
    }
  };

  const handleAutofillData = value => {
    console.log(value);
    setSearchData(value);
  };

  const handleSearch = () => {
    window.location.href = `http://localhost:5173/#/shop/${searchData}`;
  };

  const handleForgotPassword = () => {
    navigate('/forgotPassword');
  };

  // console.log(message, userData);

  // console.log(sessionStorage.getItem('sessionId'));

  return (
    <div className="header-main">
      <div className="header-primary">
        <div className="nav-logo">
          <Link to="/" className="dis-block">
            <div className="imageWrapper">
              <img src="/nav-jew-logo.jpg"></img>
            </div>
          </Link>
        </div>
        <div className="search-box">
          <InputGroup inside className="search-product">
            <AutoComplete
              data={autoFillData}
              style={{ height: '100%' }}
              onChange={handleAutofillData}
            />
            <InputGroup.Button
              className="search-icon-button"
              onClick={() => handleSearch()}
            >
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </div>
        <div className="header-store dis-flex">
          <div className="dis-flex">
            <FaStore className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer">
            <h4 className="textCenter">
              <Link to="/shop">Stores</Link>
            </h4>
          </div>
        </div>
        <div className="header-store dis-flex">
          <div className="dis-flex">
            <VscAccount className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer">
            {/* <h4 className="textCenter">Account</h4> */}
            <Whisper placement="bottom" trigger="click" speaker={renderMenu}>
              <h4 className="textCenter">
                {userData.username === '' ? 'Account' : `${userData.username}`}
              </h4>
            </Whisper>
          </div>
        </div>
        <div className="header-store dis-flex dis-none">
          <div className="dis-flex">
            <IoIosHeartEmpty className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer">
            <h4 className="textCenter">
              <Link to="/user/wishlist">Wishlist</Link>
            </h4>
          </div>
        </div>
        <div className="header-store dis-flex">
          <div className="dis-flex pos-rel">
            <p className="pos-abs cart-quantity dis-flex">
              {cartData.quantity}
            </p>
            <IoCartOutline className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer ">
            <h4 className="textCenter">
              <Link to="/cart">Cart</Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="header-secondary">
        <Navbar className="dis-flex">
          <Nav>
            <Nav.Menu title="GOLD COINS">
              <Nav.Item as={Link} to="/gold-coin/1">
                1 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/2">
                2 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/4">
                4 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/5">
                5 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/8">
                8 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/10">
                10 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/25">
                25 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/30">
                30 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/50">
                50 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/gold-coin/100">
                100 GRAM
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu title="SILVER COINS">
              <Nav.Item as={Link} to="/silver-coin/1">
                1 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/2">
                2 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/4">
                4 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/5">
                5 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/8">
                8 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/10">
                10 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/25">
                25 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/30">
                30 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/50">
                50 GRAM
              </Nav.Item>
              <Nav.Item as={Link} to="/silver-coin/100">
                100 GRAM
              </Nav.Item>
            </Nav.Menu>
            <Nav.Item as={Link} to="/gold-rate">
              Gold Rate
            </Nav.Item>
            <Nav.Menu title="About">
              <Nav.Item>Navratna Jewellers</Nav.Item>
              <Nav.Menu title="Contact">
                <Nav.Item>
                  <a href="mailto:navratnajewellers0@gmail.com">Email</a>
                </Nav.Item>
                <Nav.Item>
                  <a href="tel:+91 7004220367">Telephone</a>
                </Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Navbar>
      </div>
      <div>
        <Modal open={isSignUpOpen} onClose={handleSignUpClose} size="xs">
          <Modal.Header className="modal-custom-header">
            <Modal.Title>New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              onChange={setSignupFormValue}
              formValue={signupFormValue}
              model={signupModel}
              ref={signupRef}
            >
              <Form.Group controlId="name-9">
                <Form.ControlLabel>Username</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="email-9">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="password-9">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  name="password"
                  type="password"
                  autoComplete="off"
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="TC-9">
                <Form.ControlLabel>
                  By creating an account or logging in, you agree to
                  Navratna&apos;s Conditions of Use and Privacy Policy.
                </Form.ControlLabel>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSignUp} appearance="primary">
              Confirm
            </Button>
            <Button onClick={handleSignUpClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal open={isLoginOpen} onClose={handleLoginClose} size="xs">
          <Modal.Header className="modal-custom-header">
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              onChange={setLoginFormValue}
              formValue={loginFormValue}
              model={loginModel}
              ref={loginRef}
            >
              <Form.Group controlId="email-9">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="password-9">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  name="password"
                  type="password"
                  autoComplete="off"
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="forgot-9">
                <Button onClick={handleForgotPassword}>Forget Password</Button>
              </Form.Group>
              <Form.Group controlId="TC-9">
                <Form.ControlLabel>
                  By continuing, you agree to Navratna&apos;s Conditions of Use
                  and Privacy Notice.
                </Form.ControlLabel>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleLogin} appearance="primary">
              Confirm
            </Button>
            <Button onClick={handleLoginClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
