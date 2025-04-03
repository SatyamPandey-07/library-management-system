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
        navigate("/admin-dashboard"); // Redirect admin to dashboard after successful login
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid key, try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Enter Admin Key</h2>
        {error && <p className="text-red-600">{error}</p>}
        <input
          type="password"
          value={orgKey}
          onChange={(e) => setOrgKey(e.target.value)}
          placeholder="Enter Organization Key"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full mt-4 p-2 bg-blue-600 text-white rounded">
          Verify Key
        </button>
      </form>
    </div>
  );
}

export default AdminKey;
