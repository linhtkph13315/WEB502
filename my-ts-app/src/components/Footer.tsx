import React from 'react';

interface FooterProps {
  socialLinks: {
    icon: string;
    link: string;
  }[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer>
      <div>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.link}>
              <a href={link.link}>
                <img src={link.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
