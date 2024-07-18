import "./App.css";
import About from "./components/About";
import BooKTable from "./components/BooKTable";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductModal from "./components/ProductModal";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import CheckoutFailPage from "./pages/CheckoutFailPage";
import UserProfilePage from "./pages/UserProfilePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/product",
        element: <ProductModal />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "/checkout-success",
        element: <CheckoutSuccessPage />,
    },
    {
        path: "/checkout-fail",
        element: <CheckoutFailPage />,
    },
    {
        path: "/user",
        element: <User />,
    },
]);

function Main() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Featured />
            <Menu />
            <BooKTable />
            <Footer />
        </div>
    );
}

function User() {
    return (
        <div className="App">
            <Navbar />
            <UserProfilePage />
        </div>
    );
}

function ContactPage() {
    return (
        <div className="App">
            <Navbar />
            <Contact />
        </div>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
