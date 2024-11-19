import {
  Button,
  Dropdown,
  Form,
  Input,
  InputGroup,
  Modal,
  Nav,
  Navbar,
  Popover,
  Whisper,
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { FaStore } from '@react-icons/all-files/fa/FaStore';
import { VscAccount } from '@react-icons/all-files/vsc/VscAccount';
import { IoIosHeartEmpty } from '@react-icons/all-files/io/IoIosHeartEmpty';
import { IoCartOutline } from '@react-icons/all-files/io5/IoCartOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUp] = useState(false);

  const [signupFormValue, setSignupFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loginFormValue, setLoginFormValue] = useState({
    email: '',
    password: '',
  });

  console.log({
    name: signupFormValue.name,
    email: signupFormValue.email,
    password: signupFormValue.password,
  });

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
    };
    return (
      <Popover
        ref={ref}
        className={`${className} account-popover`}
        style={{ left, top }}
        full
      >
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item eventKey={1}>Log In</Dropdown.Item>
          <Dropdown.Item eventKey={2}>Sign Up</Dropdown.Item>
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

  return (
    <div className="header-main">
      <div className="header-primary">
        <div className="nav-logo">
          <a href="/" className="dis-block">
            <div className="imageWrapper">
              <img src="/nav-jew-logo.jpg"></img>
            </div>
          </a>
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
              <h4 className="textCenter">Account</h4>
            </Whisper>
          </div>
        </div>
        <div className="header-store dis-flex">
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
              <Link to="/user/cart">Cart</Link>
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
              <Nav.Item>Team</Nav.Item>
              <Nav.Menu title="Contact">
                <Nav.Item>Via email</Nav.Item>
                <Nav.Item>Via telephone</Nav.Item>
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
            <Button onClick={handleSignUpClose} appearance="primary">
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
            <Button onClick={handleLoginClose} appearance="primary">
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
