import { useHistory } from "react-router-dom";
import { Icon, Nav, Navbar } from "rsuite";

import Logo from "../logo/Logo";
import "./Header.css";

export default function Header() {
  const history = useHistory();

  function handleClick(route) {
    history.push(`/${route}`);
  }

  return (
    <Navbar className="header" appearance="inverse">
      <Navbar.Header>
        <Logo />
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />} onClick={() => handleClick("")}>
            Home
          </Nav.Item>
          <Nav.Item
            icon={<Icon icon="heart" />}
            onClick={() => handleClick("favoritos")}
          >
            Favoritos
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}
