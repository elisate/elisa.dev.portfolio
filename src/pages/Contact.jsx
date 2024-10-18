import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Notiflix from "notiflix";

function Contact() {
  // useForm from React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // State for loading
  const [loading, setLoading] = useState(false);

  // onSubmit handler
  const onSubmit = async (data) => {
    const { names, email, subject, message } = data;
    const formData = new FormData();

    try {
      setLoading(true); // Start loading
      formData.append("names", names);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      // Send form data to the backend
      const res = await axios.post(
        `https://elis-dev-backend.onrender.com/contact/createContact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Success Notification
      Notiflix.Notify.success("Message sent successfully!");
      reset();
    } catch (error) {
      // Error Notification
      Notiflix.Notify.failure("Failed to send the message, try again.");
      console.log(error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-[#0a0b1e] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-9">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
            Get in Touch
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] mx-auto mb-6 animate-width-grow"></div>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
            If you would like to contact me, feel free to send me a message
            using the form below or reach out through the contact information
            provided. I’m always open to discussing new projects, creative
            ideas, or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#5B4EFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-6a9 9 0 0118 0v6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 3a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Kigali, Rwanda</h4>
                <p className="text-gray-400">KN 7 Ave, Kigali</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#5B4EFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h1l1.152-.385a9.007 9.007 0 0117.696 0L21 10h1m-18 4h1v5m-4-5v5m20 0v-5h-1m4 5v-5h-1m-4 5v-5m-4 5v-5m-4 5v-5M3 10V4a9 9 0 0118 0v6M21 16V4a9 9 0 00-18 0v12m18-12V4a9 9 0 01-18 0v6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-semibold">Phone:</span> +250787239952
                </p>
                <p className="text-gray-500">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#5B4EFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.72 6.728L3 20.508V16.18a8.18 8.18 0 018.18-8.18h4.328a2 2 0 011.212.444l3.992-1.728z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8.502V4.072a2 2 0 012-2h14a2 2 0 012 2v4.428"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-semibold">Email:</span>{" "}
                  dushimiyimanaelisa@gmail.com
                </p>
                <p className="text-gray-500">Send us your query anytime!</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input Fields */}
                <div>
                  <input
                    type="text"
                    name="names"
                    placeholder="Enter your name"
                    {...register("names", { required: true })}
                    className={`w-full p-4 bg-[#1e1e2f] border ${
                      errors.names ? "border-red-500" : "border-gray-700"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]`}
                  />
                  {errors.names && (
                    <p className="text-red-500 text-sm mt-1">
                      Name is required
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    {...register("email", { required: true })}
                    className={`w-full p-4 bg-[#1e1e2f] border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Email is required
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  {...register("subject", { required: true })}
                  className={`w-full p-4 bg-[#1e1e2f] border ${
                    errors.subject ? "border-red-500" : "border-gray-700"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    Subject is required
                  </p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  {...register("message", { required: true })}
                  className={`w-full p-4 bg-[#1e1e2f] border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]`}
                  rows="6"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Message is required
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]  rounded-md text-white font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
              >
                {loading ? "Loading..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
