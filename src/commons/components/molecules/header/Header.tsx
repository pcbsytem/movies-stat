import { useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'rsuite';
import { Icon } from '../../index';
import { useMemo } from 'react';
import './Header.css';

export function Header() {
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(`/${route}`);
  }

  const MenuList = useMemo(
    () => [
      { title: 'Home', name: '', icon: 'home' },
      { title: 'Favoritos', name: 'favoritos', icon: 'heart' }
    ],
    []
  );

  return (
    <Navbar classPrefix='header' appearance='inverse'>
      <Navbar.Brand href='/'>
        <Icon iconName='movieStatShort' height='24px' width='24px' />
      </Navbar.Brand>
      <Nav>
        {MenuList.map((item) => (
          <Nav.Item
            icon={<Icon iconName={item.icon} />}
            onClick={() => handleClick(item.name)}
            key={item.name}
          >
            {`${item.title}`}
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
}
