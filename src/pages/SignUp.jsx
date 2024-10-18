import { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import LoginVectorImage from "../assets/login.png"; // Assuming you want to keep the image for the SignUp as well
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix"; // Import Notify from notiflix
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();
  const [loading, setLoading] = useState(false); // State to manage loading status

  const onsubmit = async (data) => {
    const { firstname, lastname, password, email, gender } = data;
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("gender", gender);

    try {
      setLoading(true); // Set loading to true when request starts
      const res = await axios.post(
        `https://elis-dev-backend.onrender.com/user/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Notify.success("Registration successful!"); // Notify success
      reset();
      // You can also redirect or do other actions here if needed
      navigate('/login')
    } catch (error) {
      console.log(error);
      Notify.failure("Registration failed. Please try again."); // Notify failure
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-[#0a0b1e] p-6 overflow-hidden">
      <div className="hidden lg:block lg:w-1/2 p-6">
        <img
          src={LoginVectorImage}
          alt="Sign Up illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-[#1e1e2f] p-8 lg:p-12 rounded-lg shadow-lg space-y-8 animate-fade-in-up max-h-screen overflow-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Create Account
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Please fill in the details to create your account.
        </p>

        {/* Sign Up Form */}
        <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent"
              placeholder="Enter your first name"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <span className="text-red-500">First name is required</span>
            )}
          </div>

          {/* Last Name Field */}
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent"
              placeholder="Enter your last name"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <span className="text-red-500">Last name is required</span>
            )}
          </div>

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
              id="email"
              name="email"
              className="w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
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
              id="password"
              name="password"
              className="w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>

          {/* Gender Field */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent"
              {...register("gender", { required: true })}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <span className="text-red-500">Gender is required</span>
            )}
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className={`w-full p-3 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] text-white rounded-md font-bold hover:opacity-90 transition-opacity duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button during loading
            >
              {loading ? "Signing Up..." : "Sign Up"} {/* Show loading text */}
            </button>
          </div>
        </form>

        {/* Return to Login Link */}
        <div className="text-center text-gray-400">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-[#5B4EFF] hover:underline">
              Return to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
