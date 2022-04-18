import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../Firebase-init";
import Spinner from "../../Shared/Spinner/Spinner";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
      await sendPasswordResetEmail(email);
      toast.success("successfully sent password reset link", {
          id:"reset"
      })
  };
if (sending) {
    return <Spinner/>
    }
    if (error) {
        toast.error(error?.code, {
            id:"reset_error"
        })
    }
  return (
    <div>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto my-24">
        <form onSubmit={handlePasswordReset}>
          <div class="form-group mb-6">
            <label
              htmlFor="exampleInputEmail1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              required
              type="email"
              name="email"
              class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <button
            type="submit"
            class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
