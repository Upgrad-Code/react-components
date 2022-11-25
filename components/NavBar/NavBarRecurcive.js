import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const NavBarRecurcive = ({ data }) => {
  // console.log(data);
  const hasChildren = data.subMenu && data.subMenu.length;
  return (
    <>
      {hasChildren ? (
        <NavDropdown title={data.name}>
          {hasChildren &&
            data.subMenu.map((el) => {
              return <NavBarRecurcive data={el} />;
            })}
        </NavDropdown>
      ) : (
        <Nav.Link href={data.url} key={data.id}>
          {data.name}
        </Nav.Link>
      )}
    </>
  );
};

export default NavBarRecurcive;
