// import React from 'react'

import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../utils/Toast";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        notifyError(data.message);
        return;
      }
      setLoading(false);
      notifySuccess("Sign in successful");
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      notifyError(error);
    }
  };


  console.log("formData", formData, error);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="border p-3 rounded-lg w-full"
            id="password"
            onChange={handleChange}
          />
          <span
            className="absolute right-4 top-4 cursor-pointer"
            onClick={togglePassword}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>

        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
