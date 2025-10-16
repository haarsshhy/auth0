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
