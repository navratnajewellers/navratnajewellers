import { Input, InputGroup } from 'rsuite';

const Header = () => {
  return (
    <div>
      <div className="header-primary">
        <div className="nav-logo">
          <div className="imageWrapper">
            <img src="/nav-jew-logo.jpg"></img>
          </div>
        </div>
        <div className="div2">
          <InputGroup inside className="search-product">
            <Input />
            <InputGroup.Button>{/* <SearchIcon /> */}</InputGroup.Button>
          </InputGroup>
        </div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
      </div>
      <div className="header-secondary"></div>
    </div>
  );
};

export default Header;
