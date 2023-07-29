import React, { useState } from 'react';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <button onClick={toggleMenu}>Categorías</button>
      {showMenu && (
        <ul>
          <li>Mouses</li>
          <li>Teclados</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;