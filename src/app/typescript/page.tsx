// pages/GettingStartedWithTypeScript.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GettingStartedWithTypeScript: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 bg-white">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        Back to Blog
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#1e3a8a]">
        A Beginner-Friendly Guide to Getting Started with TypeScript
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">October 22, 2024</p>
      <Image
        src="/images/typescript.jpg" // Update with your image path
        alt="Getting Started with TypeScript"
        width={500}
        height={500}
        className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg shadow-lg"
      />
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        TypeScript is a powerful programming language that builds on JavaScript by adding static type definitions It enables developers to write more robust and maintainable code In this guide we will explore the basics of TypeScript and how to get started with it
      </p>
      
      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">What is TypeScript?</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        TypeScript is an open-source language developed and maintained by Microsoft It is a superset of JavaScript meaning any valid JavaScript code is also valid TypeScript code The key feature of TypeScript is its optional static typing which helps catch errors during development rather than runtime
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Why Use TypeScript?</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-800 leading-relaxed">
        <li><strong>Improved Code Quality:</strong> TypeScript helps catch errors during development with type checking</li>
        <li><strong>Better Tooling:</strong> IDEs and text editors provide better autocompletion navigation and refactoring features</li>
        <li><strong>Enhanced Readability:</strong> Type definitions make it easier to understand codebases especially in large projects</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Getting Started with TypeScript</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mt-4 mb-2 text-gray-800">1/ Install TypeScript</h3>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        To start using TypeScript you need to install it You can do this using npm (Node Package Manager) Open your terminal and run the following command:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <code>npm install -g typescript</code>
      </pre>

      <h3 className="text-xl sm:text-2xl font-semibold mt-4 mb-2 text-gray-800">2/ Create a TypeScript File</h3>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Create a new file with a ts extension For example <code>hello.ts</code> In this file you can write TypeScript code
      </p>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <code>{`let greeting: string = "Hello, TypeScript!";
console.log(greeting);`}</code>
      </pre>

      <h3 className="text-xl sm:text-2xl font-semibold mt-4 mb-2 text-gray-800">3/ Compile TypeScript to JavaScript</h3>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        To run your TypeScript code in a JavaScript environment you need to compile it to JavaScript You can do this by running the following command:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <code>tsc hello.ts</code>
      </pre>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        This command will generate a <code>hello.js</code> file in the same directory
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-4 mb-2 text-gray-800">4. Run Your JavaScript Code</h3>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Finally you can run the compiled JavaScript code using Node.js:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <code>node hello.js</code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Conclusion</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        TypeScript is an excellent choice for developers who want to enhance their JavaScript development experience By providing static types it improves code quality and maintainability Start using TypeScript today and take your JavaScript skills to the next level!
      </p>
    </div>
  );
};

export default GettingStartedWithTypeScript;
