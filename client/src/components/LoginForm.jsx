import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      console.log(userFormData);
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
      setShowSuccessMessage(true); // Set success message state to true
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      {showSuccessMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <span className="inline-block align-middle mr-8">
            Login successful!
          </span>
        </div>
      )}

      <form className="max-w-md mx-auto mt-8 sm:w-full md:w-2/3 lg:w-1/2" onSubmit={handleFormSubmit}>
        {showAlert && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="inline-block align-middle mr-8">
              Something went wrong with your login credentials!
            </span>
            <button
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
              onClick={() => setShowAlert(false)}
            >
              <span>×</span>
            </button>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Emailnnn
          </label>
          <input
            type="text"
            id="email"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="text-red-500 text-xs mt-1">{validated && !userFormData.email && 'Email is required!'}</div>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="text-red-500 text-xs mt-1">{validated && !userFormData.password && 'Password is required!'}</div>
        </div>

        <button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;































// import { useState, useEffect } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// const LoginForm = () => {
//   const [validated, setValidated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state

//   const [userFormData, setUserFormData] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN_USER);

//   useEffect(() => {
//     if (error) {
//       setShowAlert(true);
//     } else {
//       setShowAlert(false);
//     }
//   }, [error]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);

//     try {
//      console.log(userFormData)
//       const { data } = await login({
//         variables: { ...userFormData },
//       });
      
//       console.log(data);
//       Auth.login(data.login.token);
//       setShowSuccessMessage(true); // Set success message state to true
//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       email: '',
//       password: '',
//     });
//   };


//   return (
//     <>
//       {showSuccessMessage && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
//           <span className="inline-block align-middle mr-8">
//             Login successful!
//           </span>
//         </div>
//       )}

//       <form className="max-w-md mx-auto mt-8" onSubmit={handleFormSubmit}>
//         {showAlert && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//             <span className="inline-block align-middle mr-8">
//               Something went wrong with your login credentials!
//             </span>
//             <button
//               className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
//               onClick={() => setShowAlert(false)}>
//               <span>×</span>
//             </button>
//           </div>
//         )}

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//             Emailnnn
//           </label>
//           <input
//             type="text"
//             id="email"
//             placeholder="Your email"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           <div className="text-red-500 text-xs mt-1">{validated && !userFormData.email && 'Email is required!'}</div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           <div className="text-red-500 text-xs mt-1">{validated && !userFormData.password && 'Password is required!'}</div>
//         </div>

//         <button
//           disabled={!(userFormData.email && userFormData.password)}
//           type="submit"
//           className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default LoginForm;