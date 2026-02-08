import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });
  
      alert("Registered successfully");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-4">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account ✨
        </h2>

        <p className="text-white/80 text-center mb-6">
          Join now and start organizing your life.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="text-white font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-pink-300"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-pink-300"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-pink-300"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-400 hover:bg-pink-500 text-gray-900 font-semibold rounded-xl transition shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-white/80 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-300 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
