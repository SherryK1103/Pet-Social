import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 PetSocial. All paws reserved.</p>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="https://instagram.com/petsocial" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com/petsocial" target="_blank" rel="noopener noreferrer">
              <img src="/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com/petsocial" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

