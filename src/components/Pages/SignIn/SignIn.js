import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase-init";
import { BsGoogle } from "react-icons/bs";
import toast from "react-hot-toast";
import Spinner from "../../Shared/Spinner/Spinner";
import SignUp from "../Sign Up/SignUp";

const SignIn = () => {
  // all hooks call
  const [check, setCheck] = useState(false);
  console.log("checking ", check);
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo?.email, userInfo?.password);
    console.log("sign is here");
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  if (googleLoading || loading) {
    return <Spinner />;
  }
  if (googleError || error) {
    toast.error("error happened", {
      id: "error",
    });
  }
  const handleEmail = (e) => {
    const value = e.target.value;
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValidation.test(value)) {
      setUserInfo({ ...userInfo, email: value, emailError: "" });
      toast.success(`${userInfo?.email} is updated`, {
        id: "updated",
      });
    } else {
      setUserInfo({ ...userInfo, emailError: "invalid email", email: "" });
      toast.error(`email is incorrect`, {
        id: "updated",
      });
    }
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    if (value.length > 5) {
      setUserInfo({ ...userInfo, password: value, passwordError: "" });
      toast.success(`password is correct`, {
        id: "updated",
      });
    } else {
      setUserInfo({
        ...userInfo,
        passwordError: "invalid password",
        password: "",
      });
      toast.error(`password is incorrect`, {
        id: "updated",
      });
    }
  };

  if (googleUser || user) {
    navigate(from, { replace: true });
    toast.success("successfully logged in", {
      id: "done_google",
    });
  }

  return (
    <>
      {check ? (
        <SignUp />
      ) : (
        <>
          <h1 className="mt-6 text-center text-4xl">Please Sign In</h1>
          <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
              <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                  <form onSubmit={handleForm}>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                      <p className="text-lg mb-0 mr-4">Sign in with</p>
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                        onClick={handleGoogleSignIn}
                      >
                        <BsGoogle className="text-base" />
                      </button>

                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>

                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                        required
                        onInput={handleEmail}
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Password"
                        required
                        onInput={handlePassword}
                      />
                    </div>

                      <div className="flex justify-between items-center mb-6">
                      <p className="mr-3">Need an account?</p>
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          id="exampleCheck2"
                          onClick={() => setCheck(!check)}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="exampleCheck2"
                        >
                          Sign Up
                        </label>
                      </div>
                      <Link
                        to={"/forget_password"}
                        className="text-gray-800 hover:text-blue-500 transition-transform"
                      >
                        Forgot password?
                      </Link>
                      </div>
                      <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    sign in
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SignIn;
