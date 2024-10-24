// 'use client';

// import Link from 'next/link';
// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <div>
//     <section className="bg-white text-blue-950 h-screen flex flex-col justify-center items-center text-center">
//       <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to My Blog</h1>
//       <p className="text-lg sm:text-2xl mb-6">
//         Sharing thoughts, ideas, and knowledge on web development.
//       </p>
//       <Link
//         href="/blog"
//         className="px-6 py-3 text-lg bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300"
//       >
//         Read the Blog
//       </Link>
//     </section>
   
// </div>

//   );
// };

// export default Hero;







// import React from 'react';

// const HeroSection: React.FC = () => {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-200 to-white">
//         <h1 className="text-4xl sm:text-6xl font-bold text-[#1e3a8a] mb-4">
//           I am building a Halal Blog Page for you
//         </h1>
//         <p className="text-gray-600 text-lg sm:text-xl mb-8">
//           My customer would like the featured image from the latest post to be dynamically used as a hero background image.
//         </p>
//         <button className="bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-900">
//           Try for free
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;







import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-200 to-white">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#1e3a8a] mb-4">
        Building a Community Around Programming Knowledge
        </h1>
        <p className="text-gray-800 text-lg sm:text-xl mb-8">
  Explore modern web development with our blog featuring insights on TypeScript CSS Flex and Grid for responsive design JavaScript Next.js for server-side rendering, and effective API usage to enhance your applications
</p>


        {/* CTA Buttons */}
        <div className="flex space-x-4 mt-6">
          
          <button className="bg-white text-[#1e3a8a]  font-semibold px-6 py-3 rounded-full border-2 border-[#1e3a8a] hover:bg-blue-300">
           <Link href="/learn">Learn More</Link>
          </button>
        </div>

        

        {/* Testimonial or Quote */}
        <blockquote className="italic text-gray-900 mt-4">
  This blog is a treasure trove of programming knowledge! The insights on TypeScript Next.js and APIs are incredibly helpful! - Happy Developer
</blockquote>


        {/* Newsletter Signup */}
        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-full border border-[#1e3a8a] focus:outline-none"
          />
          <button className="bg-[#1e3a8a] text-white font-semibold px-4 py-2 rounded-r-full hover:bg-gray-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




