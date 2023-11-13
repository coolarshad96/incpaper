// import React from 'react';
// import './SignUp.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


// export default function SignUp() {
//     return (
//         <div className='content'>
//             <div className='signin-body'>
//                 <div className='title'>Register New User</div>
//                 <div className='signin-form'>
//                     <div>
//                         <label>Name:</label>
//                         <input type="text" />
//                     </div>
//                     <div>
//                         <label>Email:</label>
//                         <input type="text" />
//                     </div>

//                     <div>
//                         <label>Password:</label>
//                         <input type="password" />
//                     </div>
//                     <div className='btns'>
//                         <input type="submit" />
//                         <input type="button" value='Cancel' />
//                     </div>

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



import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const auth = getAuth();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
