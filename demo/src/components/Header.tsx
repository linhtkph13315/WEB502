import React from 'react';

interface MenuItem {
  path: string;
  name: string;
}

interface HeaderProps {
  menus: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menus }) => {
  console.log(menus);
  return (
    <header>
      <div>
        <img src="https://picsum.photos/900/300" alt="" />
      </div>
      <nav>
        <ul>
          {menus.map((item) => {
            return (
              <li key={item.path}>
                <a href={item.path}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
