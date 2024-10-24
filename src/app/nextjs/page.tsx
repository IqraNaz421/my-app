

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GettingStartedWithNext: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 bg-white">
      
      <Link href="/blog" 
         className="text-blue-600 hover:underline mb-4 inline-block"> Back to Blog </Link>
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#1e3a8a]">
        Getting Started with Nextjs
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">October 24 2024</p>

     
      <Image
        src="/images/nextjs.jpg" 
        alt="Getting Started with Next.js"
        width={500}
        height={500}
        className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg shadow-lg"
      />

     
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Nextjs is a powerful React framework that allows developers to build server-side rendering and static web applications with ease
        It is built on top of React and enhances it with additional features such as pre-rendering API routes and optimized performance
        In this blog we will go through the basic steps of getting started with Nextjs
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Why Choose Nextjs?</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Nextjs brings many advantages to React developers by improving both performance and development experience It offers out-of-the-box features like server-side rendering (SSR) static site generation (SSG) and API routes making it a great option for building modern web applications
      </p>

      <ul className="list-disc pl-5 mb-4 text-gray-800 leading-relaxed">
        <li><strong>Server-Side Rendering (SSR):</strong> Nextjs allows rendering pages on the server which can lead to faster load times and improved SEO</li>
        <li><strong>Static Site Generation (SSG):</strong> With SSG you can pre-render pages at build time improving performance for pages that dont change often</li>
        <li><strong>API Routes:</strong> You can easily create backend API routes directly inside your Nextjs app</li>
        <li><strong>File-based Routing:</strong> Nextjs comes with a powerful file-based routing system that simplifies navigation in your app</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Setting Up Nextjs</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Getting started with Nextjs is easy You can quickly create a new Nextjs app using the following command:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          npx create-next-app@latest my-nextjs-app
        </code>
      </pre>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        This will set up a new Nextjs project with all the necessary files and dependencies Once the setup is complete you can navigate to the project folder and start the development server:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          cd my-nextjs-app<br />
          npm run dev
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Folder Structure</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        The default folder structure of a Nextjs project looks like this:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          my-nextjs-app/<br />
          ├── pages/ <br />
          ├── public/ <br />
          ├── styles/ <br />
          └── next.config.js
        </code>
      </pre>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        The <code>pages</code> folder is special in Nextjs as each file inside this folder automatically becomes a route in your application The <code>public</code> folder is used to store static assets and the <code>styles</code> folder contains your global and component-specific CSS files
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Creating Your First Page</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Now lets create your first page in Nextjs Navigate to the <code>pages</code> folder and create a new file called <code>index tsx</code>:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          <br />
          import React from react;<br />
          const Home: React.FC = () =&gt {'{'}<br />
          &nbsp;&nbsp;return (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Welcome to Next.js!&lt;/div&gt;<br />
          &nbsp;&nbsp;);<br />
          {'}'};<br />
          export default Home;
        </code>
      </pre>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        This will be your homepage and once you start your development server you can visit it at <code>http://localhost:3000</code>
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Deploying Your Nextjs App</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Deploying a Nextjs application is incredibly easy with platforms like Vercel or Netlify You can deploy your app to Vercel the creators of Next.js in just a few clicks First ensure your project is pushed to a GitHub repository and then visit
        
         <Link href="https://vercel.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Vercel</Link> sign up and connect your GitHub account
      </p>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Once connected import your repository and Vercel will automatically detect that its a Nextjs project Click Deploy and in a few minutes your Nextjs app will be live!
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Conclusion</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Nextjs provides a robust and easy-to-use framework for building React applications with additional benefits like server-side rendering and static site generation Whether youre building a blog an e-commerce site or a complex web application Nextjs is a great choice to consider Getting started is simple and deployment with services like Vercel makes it even easier
      </p>
    </div>
  );
};

export default GettingStartedWithNext;
