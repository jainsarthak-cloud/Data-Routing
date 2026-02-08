import React, { useContext } from "react";
import { MyStore } from "../AppContext";
import { useNavigate } from "react-router-dom";

const Login = ({ setToggle }) => {
    let { registered, login, setLogin, setIsAuth } = useContext(MyStore);

    let navigate = useNavigate();

    let HandleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    };

    let HandleSubmit = (x) => {
        x.preventDefault();

        let UserCheck = registered.find((dets) => {
            return (
                dets.username === login.username &&
                dets.password === login.password
            );
        });

        if (UserCheck) {
            alert("User fetched successfully 🎉");

            setIsAuth(true)
            localStorage.setItem("isAuth", true);

            navigate("/home");

            setLogin({
                username: "",
                password: "",
            });

        } else {
            alert("User not found ❌");

            setLogin({
                username: "",
                password: "",
            });
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

            {/* Card */}
            <div className="w-[380px] bg-white rounded-2xl shadow-2xl p-8">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back 👋
                </h1>
                <p className="text-center text-gray-500 mt-2 mb-6">
                    Login to continue
                </p>

                {/* Form */}
                <form onSubmit={HandleSubmit} className="space-y-4">

                    {/* Username */}
                    <input
                        onChange={HandleLoginChange}
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                        value={login.username}
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Password */}
                    <input
                        onChange={HandleLoginChange}
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={login.password}
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => setToggle((prev) => !prev)}
                        className="text-indigo-600 font-bold cursor-pointer hover:underline"
                    >
                        Register here
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
