import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import { QUERY_ME } from '../../../utils/queries';
import { useQuery } from '@apollo/client';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }; 

const { loading, data } = useQuery(QUERY_ME);

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="bg-blue-100">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Pet Social!</h1>
          </Link>
          <p className="m-0">FUR REAL CONNECTIONS</p>
        </div>
        
        <div>
          {Auth.loggedIn() && (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                {data?.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
