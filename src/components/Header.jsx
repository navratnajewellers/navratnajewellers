import {
  AutoComplete,
  Button,
  Drawer,
  Dropdown,
  Form,
  IconButton,
  InputGroup,
  Loader,
  Message,
  Modal,
  Nav,
  Navbar,
  Popover,
  Schema,
  Sidenav,
  useMediaQuery,
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
import { useServerLink } from '../context/server.context';
import MenuIcon from '@rsuite/icons/Menu';
import { usePrice } from '../context/price.context';

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

  const { serverLink } = useServerLink();

  const [isMobile] = useMediaQuery('(max-width: 600px)');

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

  // to display the gold price
  const { priceData } = usePrice();

  const [searchData, setSearchData] = useState(null);

  // side nav only for mobile devives
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

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

  // console.log(serverLink);

  //update session id for login user

  const updateSessionId = async (id, sessionId) => {
    try {
      const response = await axios.post(
        `${serverLink}/testing/update_session.php`,
        {
          id: id,
          sessionId: sessionId,
          protectionId: 'Nav##$56',
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
          `${serverLink}/testing/verify_email_login.php`,
          {
            email: loginFormValue.email,
            password: loginFormValue.password,
            protectionId: 'Nav##$56',
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
              `${serverLink}/testing/cart/local-to-cart.php`,
              {
                user_id: response.data.id,
                hashedId: hashedLocalUserId,
                protectionId: 'Nav##$56',
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
        const response = await fetch(`${serverLink}/testing/new_register.php`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: signupFormValue.name,
            password: signupFormValue.password,
            email: signupFormValue.email,
            protectionId: 'Nav##$56',
          }),
        });

        const data = await response.json();

        // console.log('sign up : -', data);

        if (data.message) {
          displayMessage('info', data.message);
        }

        if (
          data.error ===
          `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '${signupFormValue.email}' for key 'email'`
        ) {
          displayMessage('error', 'Email already exists');
        } else {
          // close the sign up model
          handleSignUpClose();

          // oprn login modal to login
          setIsLoginOpen(true);
        }
      } catch (error) {
        displayMessage('error', 'An error occurred during signup.');
        console.log(error);
      }
    } else {
      displayMessage('warning', 'Fill all the required data');
    }
  };

  const handleAutofillData = value => {
    // console.log(value);
    setSearchData(value);
  };

  const handleSearch = () => {
    navigate(`/shop/${searchData}`);
    // window.location.href = `http://localhost:5173/#/shop/${searchData}`;
  };

  // fire on select option
  const handleSearchOptionSelect = searchText => {
    // console.log(value);
    navigate(`/shop/${searchText}`);
  };

  const handleForgotPassword = () => {
    navigate('/forgotPassword');
  };

  // console.log(message, userData);

  // console.log(sessionStorage.getItem('sessionId'));

  // name logic
  // console.log(
  //   userData.username.split(' ')?.[0].length > 6
  //     ? `${userData.username.split(' ')?.[0].slice(0, 2)}...`
  //     : userData.username.split(' ')?.[0]
  // );

  // to display the price of gold
  const speaker = (
    <Popover title="Today's Gold Rate:">
      {priceData ? (
        <div className="header-gold-rate">
          <p>
            <strong>24KT Gold: </strong>{' '}
            <span> ₹ {priceData.price_1_gram_24K}</span>
          </p>
          <p>
            <strong>22KT Gold: </strong>{' '}
            <span> ₹ {priceData.price_1_gram_22K}</span>
          </p>
          <p>
            <strong>18KT Gold: </strong>{' '}
            <span> ₹ {priceData.price_1_gram_18K}</span>
          </p>
        </div>
      ) : (
        <div className="height-width-100 dis-flex " style={{ height: '80px' }}>
          <Loader content="loading..." vertical />
        </div>
      )}
    </Popover>
  );

  // console.log(priceData);

  return (
    <div className="header-main">
      <div className="header-primary">
        <div
          className={`dis-flex side-menu-icon-container  ${isMobile ? '' : 'dis-none'} `}
        >
          <IconButton
            appearance="link"
            size="lg"
            icon={<MenuIcon />}
            onClick={() => setIsSideNavOpen(true)}
          ></IconButton>
        </div>
        <div className="nav-logo">
          <Link to="/" className="dis-block">
            <div className="imageWrapper">
              <img
                src="/nav-jew-logo.jpg"
                loading="lazy"
                alt="Navratna Jewellers Logo"
              ></img>
            </div>
          </Link>
        </div>
        <div className="search-box">
          <InputGroup
            inside
            className={`search-product ${isMobile ? 'dis-none-imp' : ''} `}
          >
            <AutoComplete
              data={autoFillData}
              style={{ height: '100%' }}
              onChange={handleAutofillData}
              onSelect={handleSearchOptionSelect}
              placeholder="Search for Gold and Silver Coins"
            />
            <InputGroup.Button
              className="search-icon-button"
              onClick={() => handleSearch()}
            >
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </div>
        <Link to="/shop" className="header-store dis-flex">
          <div className="dis-flex">
            <FaStore className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer">
            <h4 className="textCenter">Stores</h4>
          </div>
        </Link>
        {/* <div className="header-store dis-flex">
          <div className="dis-flex">
            <FaStore className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer">
            <h4 className="textCenter">
              <Link to="/shop">Stores</Link>
            </h4>
          </div>
        </div> */}
        <div className="header-store dis-flex">
          <div className="dis-flex">
            <VscAccount className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer">
            {/* <h4 className="textCenter">Account</h4> */}
            <Whisper placement="bottom" trigger="click" speaker={renderMenu}>
              <h4 className="textCenter">
                {userData.username === ''
                  ? 'Account'
                  : `${
                      userData.username?.split(' ')[0].length > 6
                        ? `${userData.username?.split(' ')[0].slice(0, 6)}...`
                        : userData.username?.split(' ')[0]
                    }`}
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
              <Link>Wishlist</Link>
            </h4>
          </div>
        </div>
        <Link to="/cart" className="header-store dis-flex">
          <div className="dis-flex pos-rel">
            <p className="pos-abs cart-quantity dis-flex">
              {cartData.quantity}
            </p>
            <IoCartOutline className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer ">
            <h4 className="textCenter">Cart</h4>
          </div>
        </Link>
      </div>
      <div className={`margin-t5 margin-b20 ${isMobile ? '' : 'dis-none'} `}>
        <div className="search-box">
          <InputGroup inside className="search-product">
            <AutoComplete
              data={autoFillData}
              style={{ height: '100%' }}
              onChange={handleAutofillData}
              onSelect={handleSearchOptionSelect}
              placeholder="Search for Gold and Silver Coins"
            />
            <InputGroup.Button
              className="search-icon-button"
              onClick={() => handleSearch()}
            >
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </div>
      </div>
      <div className={`header-secondary ${isMobile ? 'dis-none' : ''} `}>
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
              {/* Gold Rate */}
              <Whisper
                placement="bottom"
                trigger="hover"
                controlId="control-id-hover-enterable"
                speaker={speaker}
                enterable
              >
                Gold Rate
              </Whisper>
            </Nav.Item>
            <Nav.Menu title="About" className="about-menu">
              <Nav.Item as={Link} to="/page/ahout-us">
                Navratna Jewellers
              </Nav.Item>
              <Nav.Menu
                title="Contact"
                openDirection={isMobile ? 'start' : 'end'}
              >
                <Nav.Item>
                  <a
                    href="mailto:navratnajewellers0@gmail.com"
                    className="header-menu-option-link"
                  >
                    Email
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <a
                    href="tel:+91 7004220367"
                    className="header-menu-option-link"
                  >
                    Telephone
                  </a>
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
      <div>
        <Drawer
          open={isSideNavOpen}
          placement="left"
          onClose={() => setIsSideNavOpen(false)}
          className="sidenav-drawer-container"
        >
          <Drawer.Header>
            <h4 className="main-color">Navratna Jewellers</h4>
          </Drawer.Header>
          <Drawer.Body>
            <div className="sidenav-container">
              <Sidenav defaultOpenKeys={['2']}>
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item eventKey="1" as={Link} to="/gold-rate">
                      Gold Rate
                    </Nav.Item>
                    <Nav.Menu eventKey="2" title="GOLD COINS">
                      <Nav.Item eventKey="2-1" as={Link} to="/gold-coin/1">
                        1 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-2" as={Link} to="/gold-coin/2">
                        2 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-3" as={Link} to="/gold-coin/4">
                        4 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-4" as={Link} to="/gold-coin/5">
                        5 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-5" as={Link} to="/gold-coin/8">
                        8 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-6" as={Link} to="/gold-coin/10">
                        10 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-7" as={Link} to="/gold-coin/25">
                        25 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-8" as={Link} to="/gold-coin/30">
                        30 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-9" as={Link} to="/gold-coin/50">
                        50 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="2-10" as={Link} to="/gold-coin/100">
                        100 GRAM
                      </Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu eventKey="3" title="SILVER COINS">
                      <Nav.Item eventKey="3-1" as={Link} to="/silver-coin/1">
                        1 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-2" as={Link} to="/silver-coin/2">
                        2 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-3" as={Link} to="/silver-coin/4">
                        4 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-4" as={Link} to="/silver-coin/5">
                        5 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-5" as={Link} to="/silver-coin/8">
                        8 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-6" as={Link} to="/silver-coin/10">
                        10 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-7" as={Link} to="/silver-coin/25">
                        25 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-8" as={Link} to="/silver-coin/30">
                        30 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-9" as={Link} to="/silver-coin/50">
                        50 GRAM
                      </Nav.Item>
                      <Nav.Item eventKey="3-10" as={Link} to="/silver-coin/100">
                        100 GRAM
                      </Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu eventKey="4" title="About">
                      <Nav.Item eventKey="4-1" as={Link} to="/page/ahout-us">
                        Navratna Jewellers
                      </Nav.Item>
                      <Nav.Menu eventKey="4-2" title="Contact">
                        <Nav.Item eventKey="4-2-1">
                          <a
                            href="mailto:navratnajewellers0@gmail.com"
                            className="header-menu-option-link"
                          >
                            Email
                          </a>
                        </Nav.Item>
                        <Nav.Item eventKey="4-2-2">
                          <a
                            href="tel:+91 7004220367"
                            className="header-menu-option-link"
                          >
                            Telephone
                          </a>
                        </Nav.Item>
                      </Nav.Menu>
                    </Nav.Menu>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
