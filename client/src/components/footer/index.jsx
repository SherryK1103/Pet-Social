import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p className="m-3">&copy; 2023 PetSocial. All paws reserved.</p>
          <nav>
            <ul className="m-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
            </ul>
          </nav>
          <div className="social-icons m-3">
            <a href="https://instagram.com/petsocial" target="_blank" rel="noopener noreferrer">
              <img src="assets/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com/petsocial" target="_blank" rel="noopener noreferrer">
              <img src="assets/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com/petsocial" target="_blank" rel="noopener noreferrer">
              <img src="assets/facebook-icon.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

