import './App.css'
import { Payment_Screen } from './Components/Payment_Screen/Payment_Screen';
import {SignIn} from './Components/SignIn_SignUp/SignIn.jsx'
import {SignUp} from './Components/SignIn_SignUp/SignUp.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Subscription_Model } from './Components/Subscription_Mode;/Subscription_Model';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Navigate replace to="/SignUp" />} />
     <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Payment_Screen" element={<Payment_Screen/>} />
        <Route path="/Subscription_Model" element={<Subscription_Model/>} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
