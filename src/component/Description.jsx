"use client";
import React from "react";
import Image from "next/image";
const Description = () => {
  return (
    <div className="w-full p-5">
      <div className="flex p-4 justify-center items-center">
        <div className="w-1/2">
          <div>
            <h1 className="font-bold text-3xl underline p-1 text-center">
              Introduction
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Hi🖖</h1>
          </div>
          <div>
            <p>
              I'm a passionate <strong>Full-Stack</strong> Web Developer
              specializing in the MERN Stack (MongoDB, Express.js, React.js,
              Node.js). I love turning ideas into scalable, high-performance,
              and secure web applications. With experience in both frontend and
              backend development, I build complete web solutions — from
              responsive UI/UX designs to robust REST APIs, authentication
              systems, and database integrations. I’ve also worked with
              technologies like Next.js, MySQL, Tailwind CSS, and more. I enjoy
              solving real-world problems with clean code and modern development
              practices, and I’m always looking to learn and improve.
            </p>
          </div>
        </div>
        <div className="transition-all ease-in duration-500 w-1/2 flex justify-center">
          <div className="border-1 border-violet-400 rounded-full">
            <Image
              src={"/ownbg.jpeg"}
              width={400}
              height={400}
              alt="myPhoto"
              className="object-fill relative right-0 rounded-full p-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
