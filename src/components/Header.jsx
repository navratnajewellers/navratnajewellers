import {
  Button,
  Dropdown,
  Form,
  Input,
  InputGroup,
  Message,
  Modal,
  Nav,
  Navbar,
  Popover,
  useToaster,
  Whisper,
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { FaStore } from '@react-icons/all-files/fa/FaStore';
import { VscAccount } from '@react-icons/all-files/vsc/VscAccount';
import { IoIosHeartEmpty } from '@react-icons/all-files/io/IoIosHeartEmpty';
import { IoCartOutline } from '@react-icons/all-files/io5/IoCartOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useProfile } from '../context/profile.context';
import CryptoJS from 'crypto-js';

const Header = () => {
  const toaster = useToaster();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUp] = useState(false);
  const [message, setMessage] = useState('');
  // const [userData, setUserData] = useState({
  //   id: '',
  //   username: '',
  // });
  const { userData, setUserData } = useProfile();

  const [signupFormValue, setSignupFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loginFormValue, setLoginFormValue] = useState({
    email: '',
    password: '',
  });

  // console.log({ userData, setUserData });

  // uncomment to see the login and sign form data
  // console.log({
  //   signupName: signupFormValue.name,
  //   signupEmail: signupFormValue.email,
  //   signupPassword: signupFormValue.password,
  //   loginEmail: loginFormValue.email,
  //   loginPassword: loginFormValue.password,
  // });

  // for display notification message
  const displayMessage = (type, message) => {
    toaster.push(
      <Message showIcon type={type} closable>
        <strong>{type}!</strong> {message}
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
      console.log(response.data.message);
    } catch (error) {
      setMessage('Session update failed.');
      displayMessage('error', 'Session update failed.');
      console.log(error);
    }
  };

  // for the account login and sign in
  const renderMenu = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
      onClose();
      console.log(eventKey);
      if (eventKey === 1) {
        console.log('login modal is open');
        setIsLoginOpen(true);
      }
      if (eventKey === 2) {
        console.log('sign up modal is open');
        setIsSignUp(true);
      }
      if (eventKey === 4) {
        console.log('Logout Successfully');
        setUserData({
          id: '',
          username: '',
          sessionId: '',
        });
        sessionStorage.removeItem('sessionId');
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
    setMessage('');

    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1/testing/verify_email_login.php',
        {
          email: loginFormValue.email,
          password: loginFormValue.password,
        }
      );
      setMessage(response.data.message);

      displayMessage('info', response.data.message);

      //check database message for successful login

      if (response.data.message === 'Login successful') {
        console.log(response.data);

        const sessionId = generateSessionId(response.data.username);
        console.log(sessionId);

        setUserData({
          id: response.data.id,
          username: response.data.username,
          sessionId: sessionId,
        });

        updateSessionId(response.data.id, sessionId);

        sessionStorage.setItem('sessionId', sessionId);
        const storedSessionId = sessionStorage.getItem('sessionId');
        console.log('stored session id', storedSessionId);

        handleLoginClose();
      }
    } catch (error) {
      setMessage('An error occurred during login.');
      displayMessage('error', 'An error occurred during login.');
      console.log(error);
    }
  };

  const handleSignUp = async e => {
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

      setMessage(data.message);

      displayMessage('info', data, message);

      handleSignUpClose();
    } catch (error) {
      setMessage('An error occurred during signup.');
      displayMessage('error', 'An error occurred during signup.');
      console.log(error);
    }
  };

  console.log(message, userData);

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
            <Input
              className="search-input textCenter"
              placeholder="Search here"
            />
            <InputGroup.Button className="search-icon-button">
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
          <div className="dis-flex">
            <IoCartOutline className="header-icons" />
          </div>
          <div className="header-text-container cursorPointer">
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
            <Form fluid onChange={setLoginFormValue} formValue={loginFormValue}>
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
