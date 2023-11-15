import {  Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const openLogin = () => {
    setOpenLoginModal(true);
  };

  const closeLogin = () => {
    setOpenLoginModal(false);
  };

  const openSignup = () => {
    setOpenSignupModal(true);
  };

  const closeSignup = () => {
    setOpenSignupModal(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* <button
            className="lg:hidden text-white focus:outline-none"
            onClick={openLogin}
          >
            Login
          </button> */}
          <div className="hidden lg:flex ml-auto">
            <Link to="/" className="text-white ml-4">
              Search For Pets
            </Link>
            {Auth.loggedIn() ? (
              <button className="text-white ml-4" onClick={Auth.logout}>
                Logout
              </button>
            ) : (
              <>
                <button
                  className="text-white ml-4"
                  onClick={openLogin}
                >
                  Login
                </button>
                <button
                  className="text-white ml-4"
                  onClick={openSignup}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Transition show={openLoginModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeLogin}
        >
        <div className="min-h-screen px-4 text-center">
          
        </div>
          <LoginForm closeModal={closeLogin} />
        </Dialog>
      </Transition>

      {/* Sign Up Modal */}
      <Transition show={openSignupModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeSignup}
        >
          {/* ... Modal Content */}
          <SignUpForm closeModal={closeSignup} />
        </Dialog>
      </Transition>
    </>
  );
};

export default AppNavbar;
