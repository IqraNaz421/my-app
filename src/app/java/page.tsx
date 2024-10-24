

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JavaScriptES6Features: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 bg-white">
     
      <Link href="/blog"
         className="text-blue-600 hover:underline mb-4 inline-block">Back to Blog
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#1e3a8a]">
        JavaScript ES6 Features
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">October 24 2024</p>

      
      <Image
        src="/images/java.jpg" 
        alt="JavaScript ES6 Features"
        width={500}
        height={500}
        className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg shadow-lg"
      />

      
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        ES6 (ECMAScript 2015) introduced many new features to JavaScript improving the overall development experience and making the language more powerful
        In this blog well take a look at some of the most important features of ES6 and how they can be used in modern JavaScript applications
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">1/ let and const</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        ES6 introduced two new ways to declare variables: <code>let</code> and <code>const</code> 
        Unlike <code>var</code> these have block scope which means they are only accessible within the block they are defined in
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          let name = John; <br />
          const age = 30;
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">2/ Arrow Functions</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Arrow functions provide a more concise way to write functions in JavaScript They also have the added benefit of not binding their own <code>this</code> value
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          const add = (a, b) = a + b;
        </code>
      </pre>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        This is equivalent to:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          function add(a b) {'{'}<br />
          &nbsp;&nbsp;return a + b;<br />
          {'}'}
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">3/ Template Literals</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Template literals are a new way to work with strings They allow for easier string concatenation and embedding variables inside strings using backticks (<code></code>) and <code>${'{}'}</code>
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          const name = John;<br />
          const message = Hello ${'{'}name{''}{''}! Welcome to ES6;
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">4/ Destructuring Assignment</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Destructuring allows you to unpack values from arrays or properties from objects into distinct variables
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          <br />
          const [first second] = [1 2];<br /><br />
          <br />
          const person = {'{'} name: John age: 30 {'}'};<br />
          const {'{'} name age {'}'} = person;
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">5/ Default Parameters</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        With default parameters you can set default values for function parameters This is especially useful for handling cases where no argument is passed to the function
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          function greet(name = Guest) {'{'}<br />
          &nbsp;&nbsp;return Hello ${'{'}name{'}'}!;<br />
          {'}'}
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">6/ Spread Operator</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        The spread operator (<code>...</code>) allows you to expand an iterable (like an array) into individual elements Its great for combining arrays or objects
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          const arr1 = [1 2 3];<br />
          const arr2 = [4 5 6];<br />
          const combined = [...arr1 ...arr2]; // [1 2 3 4 5 6]
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">7/ Classes</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        ES6 introduced classes which provide a clearer and more concise syntax for creating objects and dealing with inheritance in JavaScript
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          class Person {'{'}<br />
          &nbsp;&nbsp;constructor(name age) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.age = age;<br />
          &nbsp;&nbsp;{'}'}<br /><br />
          &nbsp;&nbsp;speak() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return My name is ${'{'}this.name{'}'} and I am ${'{'}this.age{'}'} years old ;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Conclusion</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        ES6 brought many powerful features that made JavaScript more efficient readable and easier to maintain Whether you are working with new projects or upgrading legacy code utilizing ES6 features is essential to writing modern JavaScript
      </p>
    </div>
  );
};

export default JavaScriptES6Features;
