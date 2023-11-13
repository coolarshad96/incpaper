// import React from 'react';
// import './SignIn.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


// export default function SignIn() {
//     return (
//         <div className='content'>
//             <div className='signin-body'>
//                 <div className='title'>SignIn</div>
//                 <div className='signin-form'>
//                    <div>
//                     <label>Email:</label>
//                     <input type="text" />
//                    </div>
                   
//                    <div>
//                     <label>Password:</label>
//                     <input type="password" />
//                    </div>
//                    <div className='btns'>
//                    <input type="submit"/>
//                    <input type="button" value='Cancel'/>
//                    </div>
                   
//                 </div>
//                 <div className='signin-links'>
//                     <div><a>New user?Register</a></div>
//                     <div>Forgot password?Click</div>
//                 </div>
//                 <div className='signin-providers'>
//                     Google
//                 </div>
//             </div>
//         </div>
//     )
// }


// import React, { useState } from 'react';
// import { login } from '../firebase';


// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         await login(email, password);
//         console.log('Login successful!');
//       } catch (error) {
//         console.error(error);
//       }
//     }

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from "react";
import { getAuth, signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailSignIn = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleEmailSignIn}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;

