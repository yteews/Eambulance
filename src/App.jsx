import { useState } from 'react'
import './App.css'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Nav from './component/nav';
import Contact from './component/contact';
// import Signup from './component/signup';
// import LoginPage from './pages/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/contact" element={<Contact />} />



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
