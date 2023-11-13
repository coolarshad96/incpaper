import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('Signed up', user);
        // Update display name
        user.updateProfile({
          displayName: name,
        }).then(() => {
          console.log('Display name updated');
        }).catch((error) => {
          console.log(`Failed to update display name: ${error.message}`);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Sign up failed: ${errorCode} - ${errorMessage}`);
      });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/signin">SignIn</Link>
      </p>
    </div>
  );
}

export default SignUp;
