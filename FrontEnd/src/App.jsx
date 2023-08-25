import './App.css'
import { Payment_Screen } from './Components/Payment_Screen/Payment_Screen';
import {SignIn} from './Components/SignIn_SignUp/SignIn.jsx'
import {SignUp} from './Components/SignIn_SignUp/SignUp.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Navigate replace to="/SignUp" />} />
     <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Payment_Screen" element={<Payment_Screen/>} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
