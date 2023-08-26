import "./App.css";
import { Payment_Screen } from "./Components/Payment_Screen/Payment_Screen";
import { SignIn } from "./Components/SignIn_SignUp/SignIn.jsx";
import { SignUp } from "./Components/SignIn_SignUp/SignUp.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Subscription_Model } from "./Components/Subscription_Mode;/Subscription_Model";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Selected_plan_Screen } from "./Components/Selected_plan/Selected_Plan_Screen";


function App() {
  const stripePromise = loadStripe(
    "pk_test_51Nj6ADSCa6BY8pPxkDffCTuLJaPbkbErf8RWFGI0npLAFvYl2GmCDSAC32fmmoYvMJgeT59rYIJ99b2QzeFDpkAy00CHsKCfVy"
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/SignUp" />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Subscription_Model" element={<Subscription_Model />} />
          <Route path="/Selected_plan_Screen" element={<Selected_plan_Screen />} />
          <Route
            path="/Payment_Screen"
            element={
              <Elements stripe={stripePromise}>
                <Payment_Screen />
              </Elements>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
