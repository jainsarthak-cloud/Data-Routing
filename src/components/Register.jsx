import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../AppContext";

const Register = ({ setToggle }) => {
  let { register, reset, handleSubmit } = useForm();

  let { registered, setRegistered } = useContext(MyStore);

  let HandleFormSubmit = (dets) => {
    let updateUser = [...registered, dets];
    setRegistered(updateUser);

    localStorage.setItem("RegisteredUser", JSON.stringify(updateUser));

    console.log("New User:", dets);
    console.log("Updated List:", updateUser);

    reset();

    alert("Registered Successfully 🎉");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      
      {/* Card */}
      <div className="w-[400px] bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account ✨
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Register to get started
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(HandleFormSubmit)}
          className="space-y-4"
        >
          {/* Username */}
          <input
            {...register("username")}
            type="text"
            placeholder="Enter Username"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Name */}
          <input
            {...register("name")}
            type="text"
            placeholder="Enter Full Name"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Password */}
          <input
            {...register("password")}
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-purple-600 font-bold cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
