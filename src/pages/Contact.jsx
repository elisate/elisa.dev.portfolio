import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Notiflix from "notiflix";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { names, email, subject, message } = data;
    const formData = new FormData();

    try {
      setLoading(true);
      formData.append("names", names);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      const res = await axios.post(
        `https://elis-dev-backend.onrender.com/contact/createContact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Notiflix.Notify.success("Message sent successfully!");
      reset();
    } catch (error) {
      Notiflix.Notify.failure("Failed to send the message, try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0a0b1e] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-9">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
            Contact Me
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] mx-auto mb-6 animate-width-grow"></div>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
            Feel free to reach out to me through the contact form below or via
            the provided contact details. I’m always excited to connect and
            discuss new projects, creative ideas, or collaboration
            opportunities. Looking forward to hearing from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="mr-6">
                <FaMapMarkerAlt className="text-[#5B4EFF] text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Kigali, Rwanda</h4>
                <p className="text-gray-400">KN 7 Ave, Kigali</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-6">
                <FaPhoneAlt className="text-[#5B4EFF] text-2xl" />
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
                <FaEnvelope className="text-[#5B4EFF] text-2xl" />
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
                className="w-full py-4 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] rounded-md text-white font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
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
