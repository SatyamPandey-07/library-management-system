import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminKey() {
  const [orgKey, setOrgKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4300/api/v1/login/admin",
        { orgKey }
      );

      if (response.data.token) {
        navigate("/admin-dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid key, try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d1117]">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-[#161b22] bg-opacity-90 backdrop-blur-lg shadow-lg rounded-2xl border border-[#30363d] w-full max-w-md"
      >
        <h2 className="text-center text-3xl font-bold text-[#58a6ff] mb-6">
          Enter Admin Key
        </h2>

        {error && (
          <p className="text-red-500 bg-[#ff000020] px-4 py-2 rounded-lg text-center mb-4">
            {error}
          </p>
        )}

        <input
          type="password"
          value={orgKey}
          onChange={(e) => setOrgKey(e.target.value)}
          placeholder="Enter Organization Key"
          className="w-full p-3 text-lg bg-[#21262d] border border-[#30363d] text-white rounded-lg outline-none focus:ring-2 focus:ring-[#58a6ff] transition-all"
          required
        />

        <button
          type="submit"
          className="w-full mt-6 p-3 bg-[#58a6ff] text-black font-bold text-lg rounded-lg shadow-lg hover:bg-[#1f6feb] transition-all duration-300 hover:scale-105"
        >
          Verify Key
        </button>
      </form>
    </div>
  );
}

export default AdminKey;
