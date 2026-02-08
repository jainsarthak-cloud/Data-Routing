import React, { useContext } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router-dom";
import { MyStore } from "../AppContext";


const Navbar = () => {

    let { setIsAuth } = useContext(MyStore);
    let navigate = useNavigate();

    const handleLogout = () => {
        setIsAuth(false);
        localStorage.setItem("isAuth", false);

        navigate("/");
    };

    return (
        <div className="h-full flex flex-col p-6">

            {/* Logo Section */}
            <div className="flex gap-3 items-center mb-10">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md">
                    <img
                        className="w-full h-full object-cover"
                        src="https://offline.sheryians.com/images/black-logo.png"
                        alt="logo"
                    />
                </div>
                <h1 className="text-lg font-bold text-gray-800 leading-tight">
                    Sheryians <br /> Coding School
                </h1>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">

                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-xl font-medium transition duration-300 ${isActive
                            ? "bg-indigo-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-200"
                        }`
                    }
                >
                    🏠 Home
                </NavLink>

                <NavLink
                    to="/home/about"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-xl font-medium transition duration-300 ${isActive
                            ? "bg-indigo-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-200"
                        }`
                    }
                >
                    📌 About
                </NavLink>

                <NavLink
                    to="/home/contact"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-xl font-medium transition duration-300 ${isActive
                            ? "bg-indigo-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-200"
                        }`
                    }
                >
                    📞 Contact
                </NavLink>

                <NavLink
                    to="/"
                    onClick={handleLogout}
                    className="px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-100 transition duration-300"
                >
                    🚪 Logout
                </NavLink>
            </div>

            {/* Footer */}
            <div className="mt-auto text-sm text-gray-400 pt-10">
                © 2026 Sheryians Dashboard
            </div>
        </div>
    );
};

export default Navbar;
