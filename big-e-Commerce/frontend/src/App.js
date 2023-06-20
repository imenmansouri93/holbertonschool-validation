import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage, ProductDetailsPage } from "./Routes.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import axios from "axios";
import { server } from "./server";
import { useSelector } from "react-redux";


const App = () => {
  const { loading } = useSelector((state) => state.user);
  // useEffect(() => {
  //   axios
  //     .get(`${server}/user/getuser`, { withCredentials: true }).then((res) => {
  //       toast.success(res.data.message);
  //     }).catch((err) => {
  //       toast.error(err.response.data.message);
  //     })

  // }, [])
  useEffect(() => {
    Store.dispatch(loadUser());
  }, [])

  return (
    <>
      {
        loading ? (
          null
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="/activation/:activation_token" element={<ActivationPage />}
              />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:name" element={<ProductDetailsPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

          </BrowserRouter>
        )
      }
    </>
  )
}

export default App;