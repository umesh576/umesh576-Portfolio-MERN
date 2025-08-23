"use client";
import React from "react";
import Image from "next/image";

const Description = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl underline">
            Introduction
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold">Hi🖖</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            I'm a passionate <strong>Full-Stack</strong> Web Developer
            specializing in the MERN Stack (MongoDB, Express.js, React.js,
            Node.js). I love turning ideas into scalable, high-performance, and
            secure web applications. With experience in both frontend and
            backend development, I build complete web solutions — from
            responsive UI/UX designs to robust REST APIs, authentication
            systems, and database integrations. I’ve also worked with
            technologies like Next.js, MySQL, Tailwind CSS, and more. I enjoy
            solving real-world problems with clean code and modern development
            practices, and I’m always looking to learn and improve.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-violet-400 p-2 sm:p-4">
            <Image
              src={"/ownbg.jpeg"}
              width={400}
              height={400}
              alt="myPhoto"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
