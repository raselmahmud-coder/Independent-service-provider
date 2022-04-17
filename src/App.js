import Navbar from "./components/Shared/Navbar/Navbar";
import "tw-elements";
import Footer from "./components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Pages/Home/Header/Header";
import SignIn from "./components/Pages/SignIn/SignIn";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import SignUp from "./components/Pages/Sign Up/SignUp";
import ForgetPassword from "./components/Pages/ForgetPassword/ForgetPassword";
import NotFound from "./components/Shared/NotFound/NotFound";
import SingleService from "./components/Pages/SingleService/SingleService";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/sign_in" element={<SignIn/>}></Route>
        <Route path="/sign_up" element={<SignUp/>}></Route>
        <Route path="/forget_password" element={<ForgetPassword/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/single_service/:id" element={<SingleService/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
