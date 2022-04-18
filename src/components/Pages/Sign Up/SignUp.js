import React, { useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import { BsPersonCircle, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase-init";
import Spinner from "../../Shared/Spinner/Spinner";
import toast from "react-hot-toast";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    emailError: "",
    passwordError: "",
    nameError: "",
  });
  const [updateProfile] = useUpdateProfile(auth);
  const handleName = async (e) => {
    const value = e.target.value;
    if (value.length > 4) {
      setUserInfo({ ...userInfo, name: value, nameError: "" });
      await updateProfile({ displayName: userInfo?.name });
      toast.success(`${userInfo?.name} is updated`, {
        id: "updated",
      });
    } else {
      setUserInfo({ ...userInfo, nameError: "name is required", name: "" });
    }
  };
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
  const handleForm = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  /*========================= for google sign Up ============================== */
  const handleSignUpGoogle = () => {
    signInWithGoogle();
  };
  if (googleLoading || loading) {
    return <Spinner />;
  }
  if (googleUser || user) {
    navigate(from, { replace: true });
    toast.success("successfully logged in", {
      id: "done_google",
    });
  }
  if (googleError || error) {
    toast.error("error happened", {
      id: "error",
    });
  }
  return (
    <div className={"my-2"}>
      <section className="h-screen my-5">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleForm}>
                <div className="my-2">
                  <div className="flex items-center">
                    <BsPersonCircle className="text-5xl mr-2" />
                    <input
                      type="text"
                      className={`${
                        userInfo?.nameError
                          ? "focus:outline-red-600 border-red-700 "
                          : "focus:outline-blue-600 border-gray-700 "
                      }form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:gray-red-700 focus:bg-white`}
                      placeholder="Full Name"
                      onInput={handleName}
                    />
                  </div>
                  {userInfo?.nameError && (
                    <p className="text-red-600 text-center text-base">
                      {userInfo?.nameError}
                    </p>
                  )}
                </div>
                <div className={"my-2"}>
                  <div className="flex items-center">
                    <MdMarkEmailRead className="text-5xl mr-2" />
                    <input
                      type="text"
                      className={`${
                        userInfo?.emailError
                          ? "focus:outline-red-600 "
                          : "focus:outline-blue-600 "
                      }form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:gray-red-700 focus:bg-white`}
                      placeholder="Email address"
                      required
                      onInput={handleEmail}
                    />
                  </div>
                  {userInfo?.emailError && (
                    <p className="text-red-600 text-center text-base">
                      {userInfo?.emailError}
                    </p>
                  )}
                </div>

                <div className={"my-2"}>
                  <div className="flex items-center">
                    <BiLock className="text-5xl mr-2" />
                    <input
                      type="password"
                      className={`${
                        userInfo?.passwordError
                          ? "focus:outline-red-600 "
                          : "focus:outline-blue-600 "
                      }form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:gray-red-700 focus:bg-white`}
                      placeholder="Password"
                      required
                      onInput={handlePassword}
                    />
                  </div>
                  {userInfo?.passwordError && (
                    <p className="text-red-600 text-center text-base">
                      {userInfo?.passwordError}
                    </p>
                  )}
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <p
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Already have an account?
                    </p>
                  </div>
                  <Link
                    to={"/sign_in"}
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Sign in here
                  </Link>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <Link
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  style={{ backgroundColor: "#3b5998" }}
                  to={""}
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleSignUpGoogle}
                >
                  <BsGoogle className="mr-3" />
                  Continue with Google
                </Link>
                <Link
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                  style={{ backgroundColor: "#55acee" }}
                  to={""}
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-3.5 h-3.5 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                  Continue with Twitter
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
