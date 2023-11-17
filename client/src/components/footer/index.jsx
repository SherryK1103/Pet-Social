import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/profile" className="hover:text-gray-300">My Profile</Link></li>
          </ul>
        </nav>

        {/* Copyright Text */}
        <p className="text-sm">&copy; 2023 PetSocial. All 🐾paws🐾 reserved.</p>

        {/* Social Icons */}
        <div className="social-icons flex space-x-4">
          <a href="https://instagram.com/petsocial" target="_blank" rel="noopener noreferrer">
            <img src="assets/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/petsocial" target="_blank" rel="noopener noreferrer">
            <img src="assets/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/petsocial" target="_blank" rel="noopener noreferrer">
            <img src="assets/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;