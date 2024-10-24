import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-white py-10">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Profile Image */}
        <Image
          src="/images/dp.jpeg" // Replace with your image path
          alt="Iqra Naz"
          width={32}height={32}
          className="rounded-full w-32 h-32 mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">About Me</h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-6">
          Hi I am Iqra Naz a passionate web developer dedicated to crafting beautiful and efficient web applications With expertise in TypeScript JavaScript and Next.js I enjoy transforming complex problems into user-friendly solutions
        </p>
        
        <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-2">My Journey</h2>
        <p className="text-gray-600 mb-6">
          I began my journey in web development fascinated by how technology connects people. Over the years I have honed my skills in front-end and back-end development exploring the latest technologies and trends
        </p>
        
        <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-2">My Skills</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>TypeScript & JavaScript</li>
          <li>React & Next.js</li>
          <li>CSS Flex & Grid Layouts</li>
          <li>RESTful APIs & Integration</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-2">Lets Connect!</h2>
        <p className="text-gray-600 mb-6">
          I believe in continuous learning and sharing knowledge. Feel free to reach out through my social media or contact me directly to collaborate or share ideas!
        </p>

        <Link href="/contact" className="bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-900">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
