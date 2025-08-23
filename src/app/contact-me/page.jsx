"use client";
import React from "react";

const ContactMe = () => {
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
            <div>
              <textarea
                name="message"
                id="message"
                className="border"
                placeholder="Type your message..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
