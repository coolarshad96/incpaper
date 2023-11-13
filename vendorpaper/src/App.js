import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import ForgotPassword from './views/ForgotPassword';
import CreateCompany from './views/CreateCompany';
import CreateProduct from './views/CreateProduct';
import ShowPage from './views/ShowPage';
import SearchPage from './views/SearchPage';
import ChatPage from './views/ChatPage';
import { AuthProvider } from './Auth';
import Product from './views/Product';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createcompany" element={<CreateCompany />} />
        <Route path='/createproduct' element={<CreateProduct />} />
        <Route path="/show" element={<ShowPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/list" element={<SearchPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
