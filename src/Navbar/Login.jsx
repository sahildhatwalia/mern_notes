import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = () => {
    setLogin(!login);

    setFormData({
      name: "",
      email: "",
      tel: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (login) {
   
      if (
        !formdata.name ||
        !formdata.email ||
        !formdata.tel ||
        !formdata.password ||
        !formdata.confirmPassword
      ) {
        return alert("Please fill all fields");
      }

      if (formdata.password !== formdata.confirmPassword) {
        return alert("Passwords do not match");
      }

      const alreadyExist = users.find(
        (user) => user.email === formdata.email
      );

      if (alreadyExist) {
        return alert("Email already registered");
      }

      const newUser = {
        name: formdata.name,
        email: formdata.email,
        tel: formdata.tel,
        password: formdata.password,
      };

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      alert("Signup Successful");

      setFormData({
        name: "",
        email: "",
        tel: "",
        password: "",
        confirmPassword: "",
      });

      
      setLogin(false);
    } else {
      
      if (!formdata.email || !formdata.password) {
        return alert("Please enter Email and Password");
      }

      const user = users.find(
        (u) =>
          u.email === formdata.email &&
          u.password === formdata.password
      );

      if (user) {
        alert(`Welcome ${user.name}`);

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        navigate("/");
      } else {
        alert("Invalid Email or Password");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {login ? "Signup" : "Login"}
        </h1>

        <form className="space-y-4" onSubmit={handlesubmit}>

          {login && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {login && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Mobile Number
              </label>

              <input
                type="tel"
                name="tel"
                value={formdata.tel}
                onChange={handleChange}
                placeholder="Enter your number"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>

            <input
              type="password"x
              name="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {login && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formdata.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {login ? "Sign Up" : "Login"}
          </button>

          <p className="text-center text-gray-600">
            {login
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={handleClick}
              className="text-purple-600 font-semibold hover:underline"
            >
              {login ? "Login" : "Signup"}
            </button>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;