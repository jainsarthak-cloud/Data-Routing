import React from "react";

const Contact = () => {
  return (
    <div className="space-y-6">
      
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Us 📞
        </h1>
        <p className="text-gray-500 mt-2">
          Feel free to reach out for any queries or support.
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 max-w-lg">
        
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <textarea
          rows="4"
          placeholder="Write your message..."
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
