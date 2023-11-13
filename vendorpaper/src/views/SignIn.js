import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { AuthContext } from '../Auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/userSlice';

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, loading } = useContext(AuthContext);

  // const handleLogout = () => {
  //   auth.signOut()
  //     .then(() => {
  //       setCurrentUser(null);
  //       console.log('Logged out');
  //     })
  //     .catch((error) => {
  //       console.log(`Logout failed: ${error.message}`);
  //     });
  // };
  const handleRedirect = () => {
    if (currentUser) {
      navigate('/');
    // handleLogout();
    }
  };

  useEffect(() => {
    handleRedirect();
  }, [currentUser]); // re-run the effect when currentUser changes

  const handleSubmit = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.multiFactor.user;
        dispatch(setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          metadata: user.metadata,
          phoneNumber: user.phoneNumber,
          providerData: user.providerData,
          providerId: user.providerId,
          stsTokenManager: user.stsTokenManager,
          uid: user.uid
        }));
        setCurrentUser(user);
        setEmail('');
        setPassword('');
        setError(null);
        console.log('Signed in', user.multiFactor.user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Sign in failed: ${errorCode} - ${errorMessage}`);
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h1>Sign in</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign in</button>
      </form>
      <p>
      <Link to="/forgotpassword">Forgot password?</Link>
      </p>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;
