"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [purpose, setPurpose] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Env Variables:", {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    });
    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        alert("Message Sent Successfully ✅");
        reset();
        setPurpose("");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 space-y-4"
      >
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Send Message
        </h1>

        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="john@gmail.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Purpose */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            For which purpose you want to contact with me
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("purpose", { required: "Please select a purpose" })}
            onChange={(e) => setPurpose(e.target.value)}
            value={purpose}
          >
            <option value="">Select Purpose</option>
            <option value="Website Building">Website Building</option>
            <option value="App Building">App Building</option>
            <option value="IT Support">IT Support</option>
            <option value="Interview">Interview</option>
            <option value="Support">Support</option>
            <option value="Other purpose">Other purpose</option>
          </select>
          {errors.purpose && (
            <p className="text-red-500 text-sm mt-1">
              {errors.purpose.message}
            </p>
          )}
          {purpose && (
            <p className="text-sm text-gray-500 mt-1">
              Selected Purpose: <span className="font-semibold">{purpose}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="4"
            placeholder="Type your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("message", { required: "Message cannot be empty" })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
