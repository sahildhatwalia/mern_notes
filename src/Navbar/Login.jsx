
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
    const [login,setLogin]=useState(false)
    const [formdata,setFormData]=useState({
        name:"",
        email:"",
        tel:"",
        password:"",
        confirmPassword:""
    }
    )

    const handleclick=()=>{
        setLogin(!login)
    }
const handleChange = (e) => {
  const { name, value } = e.target;

  console.log("name", name);
  console.log("value", value);

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handlesubmit=(e)=>{
    e.preventDefault()
    if(login){
        if(formdata.password !== formdata.confirmPassword){
            return alert("password dos not match")
        }

        localStorage.setItem("user",JSON.stringify(formdata))
        alert("signup successfully")
        setLogin(true)
    }
    else{
        const user=JSON.parse(localStorage.getItem("user"))

        if(formdata.email===user.email && formdata.password ===user.password){
            alert("login success")
            navigate("/")
            
        }
       
    }



}


  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
         {login ? "Signup": "Login"}
        </h1>

        <form className="space-y-4" onSubmit={handlesubmit}>
            { login &&
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
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"  name="email"    value={formdata.email}  onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
    { login &&
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
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"   name="password"    value={formdata.password}  onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
    { login &&
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password" name="confirmPassword"     value={formdata.confirmPassword} onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
           {login ? "Sign Up" :"Login"} 
          </button>

          <p className="text-center text-gray-600">
           
           
           
           {login ? "Already have an account?" :"Create a Account"} {" "}
            <a
              href="#"
              className="text-purple-600 font-semibold hover:underline"
            >
           <span onClick={handleclick}>{login ? "Login":"Signup" }  </span>  
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;