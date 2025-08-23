"use client";
import React, { useState } from "react";

const ContactMe = () => {
  const [purpose, setpurpose] = useState("");
  const handlechange = (e) => {
    setpurpose(e.target.value);
  };
  console.log("purpose", purpose);
  return (
    <div className="flex justify-center items-center p-2">
      <div>
        <h1 className="text-3xl text-center font-bold">Send Message</h1>
        <div>
          <div className="p-1 ">
            <div>
              <input
                type="text"
                name="fullName"
                className="border-b-1 "
                placeholder="Fullname"
                required
              />
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <input
                type="Email"
                name="email"
                className="border-b-1"
                required
                placeholder="jhon@gmai.com"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="purpose">Purpose:</label>
              <div>
                <select
                  name="selectPurpose"
                  id="selectPurpose"
                  className="border"
                  onChange={handlechange}
                >
                  <option value="umesh">umesh</option>
                  <option value="joshi">joshi</option>
                </select>
              </div>
            </div>
            {purpose && (
              <div>
                <p>Selected purpose: {purpose}</p>
              </div>
            )}
            <div>
              <textarea
                name="message"
                id="message"
                className="border"
                placeholder="Type your message..."
              ></textarea>
            </div>
          </div>
          <div>
            <button className="px-5 rounded-lg bg-black py-2 text-white  hover:bg-gray-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
