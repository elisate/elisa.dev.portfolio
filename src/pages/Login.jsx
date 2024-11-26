import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import the Link component
import LoginVectorImage from "../assets/logine.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false); // Add loading state

 const onSubmit = async (data) => {
   const { email, password } = data;
   const formData = new FormData();

   try {
     setLoading(true); // Set loading to true
     formData.append("email", email);
     formData.append("password", password);

     const res = await axios.post(
       "https://elis-dev-backend.onrender.com/user/login",
       formData,
       {
         headers: {
           "Content-Type": "application/json",
         },
       }
     );

     // Notify success
     Notify.success("Login successful!");
     reset();

     // Store token in localStorage
     const userToken = res.data;
     localStorage.setItem("userToken", JSON.stringify(userToken));

     // Get the role from the response
     const role = userToken?.user?.role; // Ensure role is extracted properly
     console.log("User role:", role); // Debugging role value

     // Navigate based on role
     if (role === "Admin") {
       console.log("Navigating to dashboard...");
       navigate("/dashboard");
     } else {
       console.log("Navigating to landing...");
       navigate("/landing");
     }
   } catch (error) {
     console.error("Login error:", error);
     Notify.failure("Login failed. Please check your credentials.");
   } finally {
     setLoading(false); // Set loading to false
   }
 };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-[#0a0b1e] p-6 overflow-hidden">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 p-6">
        <img
          src={LoginVectorImage}
          alt="Login illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-[#1e1e2f] p-8 lg:p-12 rounded-lg shadow-lg space-y-8 animate-fade-in-up max-h-screen overflow-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Please enter your credentials to log in to your dashboard.
        </p>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className={`w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required.</span>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className={`w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                Password is required.
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              className={`w-full p-3 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] text-white rounded-md font-bold hover:opacity-90 transition-opacity duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>

        {/* Google Login */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Or log in with:</p>
          <button className="flex items-center justify-center space-x-2 p-3 w-full bg-[#4285F4] text-white rounded-md hover:opacity-90 transition-opacity duration-300">
            <FaGoogle className="text-lg" />
            <span>Login with Google</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-gray-400">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#5B4EFF] hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
