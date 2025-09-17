import React from 'react';
import AuthComponent from './HOCComponent';

function Main({ title, user }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome, {user}!</p>
    </div>
  );
}

// Wrap Main with AuthComponent before exporting
export default AuthComponent(Main);
