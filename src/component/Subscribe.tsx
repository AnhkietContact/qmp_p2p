import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-center text-2xl font-semibold mb-6">Enter Your Email Address</h2>
        
        <div className="mb-4">
         
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="youremail@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8311] focus:border-[#FF8311]"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#FF8311] text-white py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 hover:bg-[#ff6a00] focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
