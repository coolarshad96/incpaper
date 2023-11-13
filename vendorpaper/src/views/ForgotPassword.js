import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { auth } from '../firebase';
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent successfully.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleForgotPassword}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Send Password Reset Email</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
