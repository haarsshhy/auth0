//.env
/*REACT_APP_AUTH0_DOMAIN=dev-sq2d1t04wb11ubh2.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=tiaXupXiXFekLFqLVy1izWp5yzG87APG
REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000
REACT_APP_AUTH0_LOGOUT_URI=http://localhost:3000
*/



import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading, error } = useAuth0();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops... {error.message}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Room Booking App</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
          <p>You can now access protected room booking features!</p>
        </div>
      )}
    </div>
  );
}

export default App;
