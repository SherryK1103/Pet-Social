import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
// import { Navbar, Nav, Container, Modal, Tab } from 'tailwindcss';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="text-white text-xl font-bold">Google Books Search</Link>
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setShowModal(!showModal)}
        >
          <span className="material-icons">menu</span>
        </button>
        <div className="hidden lg:flex ml-auto">
          <Link to='/' className="text-white ml-4">Search For Pets</Link>
          {Auth.loggedIn() ? (
            <>
              <Link to='/saved' className="text-white ml-4">See Your Books</Link>
              <button className="text-white ml-4" onClick={Auth.logout}>Logout</button>
            </>
          ) : (
            <button className="text-white ml-4" onClick={() => setShowModal(true)}>Login/Sign Up</button>
          )}
        </div>
      </div>
    </nav>

    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ${showModal ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-6 rounded-lg w-96">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Login/Sign Up</h2>
            <button className="text-gray-600" onClick={() => setShowModal(false)}>
              <span className="material-icons">close</span>
            </button>
          </div>
          <div className="flex mb-4">
            <button 
              className={`text-sm font-medium py-2 px-4 rounded mr-2 focus:outline-none ${showModal ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
            <button 
              className={`text-sm font-medium py-2 px-4 rounded focus:outline-none ${showModal ? 'bg-gray-300 text-gray-700' : 'bg-gray-800 text-white'}`}
              onClick={() => setShowModal(false)}
            >
              Sign Up
            </button>
          </div>
          {showModal && (
            <div>
              {/* Render the Login or Sign Up form based on user's selection */}
              {showModal ? <LoginForm handleModalClose={() => setShowModal(false)} /> : <SignUpForm handleModalClose={() => setShowModal(false)} />}
            </div>
          )}
        </div>
      </div>
    </div>
  </>
  );
};

export default AppNavbar;
