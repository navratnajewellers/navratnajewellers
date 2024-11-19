import { Input, InputGroup, Nav, Navbar } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { FaStore } from '@react-icons/all-files/fa/FaStore';
import { VscAccount } from '@react-icons/all-files/vsc/VscAccount';
import { IoIosHeartEmpty } from '@react-icons/all-files/io/IoIosHeartEmpty';
import { IoCartOutline } from '@react-icons/all-files/io5/IoCartOutline';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-primary">
        <div className="nav-logo">
          <div className="imageWrapper">
            <img src="/nav-jew-logo.jpg"></img>
          </div>
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
          <div className="header-text-container">
            <h4 className="textCenter">Stores</h4>
          </div>
        </div>
        <div className="header-store dis-flex">
          <div className="dis-flex">
            <VscAccount className="header-icons" />
          </div>
          <div className="header-text-container">
            <h4 className="textCenter">Account</h4>
          </div>
        </div>
        <div className="header-store dis-flex">
          <div className="dis-flex">
            <IoIosHeartEmpty className="header-icons" />
          </div>
          <div className="header-text-container">
            <h4 className="textCenter">Wishlist</h4>
          </div>
        </div>
        <div className="header-store dis-flex">
          <div className="dis-flex">
            <IoCartOutline className="header-icons" />
          </div>
          <div className="header-text-container">
            <h4 className="textCenter">Cart</h4>
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
    </div>
  );
};

export default Header;
