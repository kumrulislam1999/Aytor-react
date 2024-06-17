import { Route, Routes } from "react-router-dom";

/* ===== Import Pages ===== */
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Users from "./pages/Contact/Contact";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Privacy from "./pages/Privacy/Privacy";
import Error404 from "./pages/Error404/Error404";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Wishlist from "./pages/Wishlist/Wishlist";
import Compare from "./pages/Compare/Compare";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct/CreateProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct/UpdateProduct";
import UserDashboard from "./pages/User/UserDashboard/UserDashboard";
import UpdateProfile from "./pages/User/UpdateProfile/UpdateProfile";
import Orders from "./pages/User/Orders/Orders";
import Profile from "./pages/User/Profile/Profile";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import Users from "./pages/Admin/Users/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="creat-category" element={<CreateCategory />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="update-product/:id" element={<UpdateProduct />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/user/">
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="update-profile/:id" element={<UpdateProfile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
