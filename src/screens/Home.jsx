import React from "react";

const Home = () => {
  return (
    <div className="space-y-6">
      
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Dashboard 👋
        </h1>
        <p className="text-gray-500 mt-2">
          This is your Home page where you can see an overview.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-indigo-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-indigo-700">
            🚀 Projects
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Manage and track your ongoing projects easily.
          </p>
        </div>

        <div className="bg-purple-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-purple-700">
            📚 Learning
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Continue improving your coding skills daily.
          </p>
        </div>

        <div className="bg-pink-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-pink-700">
            🎯 Goals
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Stay focused and achieve your placement targets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
