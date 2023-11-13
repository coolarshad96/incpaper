import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { AuthContext } from '../Auth';
import './Home.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUser } from '../store/reducers/userSlice';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      dispatch(clearUser());
      navigate('/signin')
    } catch (err) {
      console.error(err);
    }
  };

  const companies = [
    {
      id: 1,
      name: 'ABC Corp',
      email: 'abc@abc.com',
      phone: '555-1234',
    },
    {
      id: 2,
      name: 'XYZ Inc',
      email: 'xyz@xyz.com',
      phone: '555-5678',
    },
    {
      id: 3,
      name: 'PQR Industries',
      email: 'pqr@pqr.com',
      phone: '555-9876',
    },
  ];
 
  const storedData = JSON.parse(sessionStorage.getItem('userData'));
  return (<>
  <NavBar />
  <HomePage />

  {/* <div>
      <h1>Hi</h1>
      {currentUser ? <p>Welcome, {currentUser?.displayName}!</p>: <p>Welcome, Guest!</p>}
      <button onClick={handleSignOut}>Log Out</button>

      <div className="companies-container">
        {companies.map((company) => (
          <div key={company.id} className="company-box">
            <h2>{company.name}</h2>
            <p><span className="label">Email:</span> {company.email}</p>
            <p><span className="label">Phone:</span> {company.phone}</p>
          </div>
        ))}
      </div>
      <div>
      {user.uid != '' ? (
        <div>
          <h2>Welcome from store, {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>Uid: {user.uid}</p>
          <p>stsTokenManager: {user.stsTokenManager['accessToken']}</p>
        </div>
      ) : (
        (
          <div>
            <h2>Welcome from store, {storedData?.displayName}</h2>
            <p>Email: {storedData?.email}</p>
            <p>Uid: {storedData?.uid}</p>
            <p>stsTokenManager: {storedData?.stsTokenManager['accessToken']}</p>
          </div>
        )
      )}
    </div>
    </div> */}
  </>
    
  );
}

export default Home;
