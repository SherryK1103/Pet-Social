import { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../../utils/auth';

const AppNavbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [signupSuccessModal, setSignupSuccessModal] = useState(false);
  const [loginSuccessModal, setLoginSuccessModal] = useState(false);

  const openLogin = () => {
    setOpenLoginModal(true);
  };

  const closeLogin = (e) => { // Hey Donna this might need to change
    e.nativeEvent.stopPropagation();
    setOpenLoginModal(false);
  };

  const openLoginSuccessModal = () => {
    setLoginSuccessModal(true);
  };
  
  const closeLoginSuccessModal = () => {
    setLoginSuccessModal(false);
  };

  const openSignup = () => {
    setOpenSignupModal(true);
  };

  const closeSignup = (e) => { // Hey Donna this might need to change
    e.nativeEvent.stopPropagation();
    setOpenSignupModal(false);
  };

  const openSignupSuccessModal = () => {
    setSignupSuccessModal(true);
  };

  const closeSignupSuccessModal = () => {
    setSignupSuccessModal(false);
  };

  const handleLoginSuccess = () => {
    openLoginSuccessModal();
    console.log("Login success!");
  };

  const handleSignupSuccess = () => {
    const { setUser } = useContext(UserContext);
    openSignupSuccessModal();
    console.log("Signup success!");
  };


  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="ml-auto">
            <Link to="/" className="text-white ml-4">
              Search For Pets
            </Link>
            {Auth.loggedIn() ? (
              <button className="text-white ml-4" onClick={Auth.logout}>
                Logout
              </button>
            ) : (
              <>
                <button className="text-white ml-4" onClick={openLogin}>
                  Login
                </button>
                <button className="text-white ml-4" onClick={openSignup}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

  
      {/* Login Modal */}
      {openLoginModal && (
        <Transition show={openLoginModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeLogin}
          overlayclassname="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <LoginForm closeModal={closeLogin} handleLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        </Dialog>
      </Transition>
      )}
  
      {/* Sign Up Modal */}
      {openSignupModal && (
       <Transition show={openSignupModal} as={Fragment}>
       <Dialog
         as="div"
         className="fixed inset-0 z-10 overflow-y-auto"
         onClose={closeSignup}
         overlayclassname="fixed inset-0 z-10 overflow-y-auto"
       >
         <div className="min-h-screen px-4 text-center">
           <div className="bg-white p-8 rounded shadow-lg">
             <SignUpForm closeModal={closeSignup} handleSignupSuccess={handleSignupSuccess} />
           </div>
         </div>
       </Dialog>
     </Transition>
      )}
  
      {/* Signup Success Modal */}
      {signupSuccessModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-green-500">Signup successful!</p>
            <button
              onClick={closeSignupSuccessModal}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {loginSuccessModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-green-500">You are logged in!</p>
            <button
              onClick={closeLoginSuccessModal}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppNavbar;