import React from "react";

const About = () => {
  return (
    <div className="space-y-6">
      
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          About Us 📌
        </h1>
        <p className="text-gray-500 mt-2">
          Learn more about this dashboard application.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <p className="text-gray-700 leading-relaxed">
          This is a simple React Dashboard project built using{" "}
          <span className="font-semibold text-indigo-600">
            React Router
          </span>{" "}
          and{" "}
          <span className="font-semibold text-purple-600">
            Tailwind CSS
          </span>
          .  
          It includes authentication, navigation, and a modern UI experience.
        </p>

        <div className="mt-4 flex gap-4">
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl text-sm font-medium">
            React
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-sm font-medium">
            Tailwind
          </span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-xl text-sm font-medium">
            Dashboard
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
