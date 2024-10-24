import React from 'react';
import Link from 'next/link';

const LearnMore: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-200 to-white">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#1e3a8a] mb-4">Learn More About Our Blog</h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8">
          Discover how we leverage modern technologies to provide you with a rich and engaging blogging experience
        </p>
        <button className="bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-900">
          <Link href="/blog">Get Started</Link>
        </button>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-[#1e3a8a] mb-4">About Our Blogs</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our Halal Blog where we dive deep into the world of halal living and lifestyle! Our blog is built using modern web technologies ensuring a fast responsive and engaging user experience
        </p>

        {/* Technologies We Use */}
        <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-2">Technologies We Use</h3>
        
        <h4 className="text-xl font-semibold mb-1">TypeScript</h4>
        <p className="text-gray-600 mb-4">
          Our blog is developed with TypeScript a superset of JavaScript that brings static typing to the table This helps us catch errors early in the development process and ensures a more robust codebase.
        </p>
        
        <h4 className="text-xl font-semibold mb-1">React Hooks</h4>
        <p className="text-gray-600 mb-4">
          By leveraging React Hooks, we manage state and lifecycle methods efficiently within functional components creating a more dynamic user interface
        </p>

        <h4 className="text-xl font-semibold mb-1">ES6 JavaScript</h4>
        <p className="text-gray-600 mb-4">
          We utilize ES6 features to write cleaner more concise and maintainable code enhancing the overall quality of our code
        </p>

        <h4 className="text-xl font-semibold mb-1">Next.js</h4>
        <p className="text-gray-600 mb-4">
          Built on Next.js our blog benefits from server-side rendering static site generation, and API routes optimizing performance and SEO
        </p>

        <h4 className="text-xl font-semibold mb-1">APIs</h4>
        <p className="text-gray-600 mb-4">
          We integrate various APIs to fetch and display dynamic content enriching our blog and keeping our readers engaged
        </p>

        {/* Join Us Section */}
        <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4">Join Us on This Journey!</h3>
        <p className="text-gray-700 mb-4">
          We invite you to explore our content which includes tutorials tips and resources on halal living Stay updated with our latest posts and engage with a community that shares your interests
        </p>

        <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4">Stay Connected!</h3>
        <p className="text-gray-700">
          Dont forget to subscribe to our newsletter for the latest updates or follow us on social media to join the conversation!
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
