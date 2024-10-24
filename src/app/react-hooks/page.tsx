// 'use client';
// import React from 'react';
// import Link from 'next/link';

// const UnderstandingReactHooks: React.FC = () => {
//   return (
//     <div className="max-w-full mx-auto px-4 py-8 bg-white">
//       <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
//         Back to Blog
//       </Link>
//       <h1 className="text-4xl font-bold mb-4 text-center text-[#1e3a8a]">Understanding React Hooks</h1>
//       <p className="text-sm text-gray-500 mb-4 text-center">October 22, 2024</p>
//       <img
//         src="/images/react-hooks.jpg" // Update with your image path
//         alt="Understanding React Hooks"
//         className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg shadow-lg"
//       />
//       <p className="mb-4 text-gray-800 leading-relaxed">
//         React Hooks are functions that let you use state and other React features without writing a class. Hooks are a 
//         powerful addition to React that allow you to manage state, side effects, and context in a more functional way. 
//         They were introduced in React 16.8 and have become a standard part of React development.
//       </p>
      
//       <h2 className="text-3xl font-semibold mt-6 mb-2 text-gray-800">Why Use Hooks?</h2>
//       <p className="mb-4 text-gray-800 leading-relaxed">
//         Hooks provide a way to encapsulate component logic, making it easier to share and reuse across components. 
//         They also simplify the way components handle state and lifecycle events, leading to cleaner and more readable code.
//       </p>

//       <h2 className="text-3xl font-semibold mt-6 mb-2 text-gray-800">Commonly Used Hooks</h2>
//       <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">1. useState</h3>
//       <p className="mb-4 text-gray-800 leading-relaxed">
//         The `useState` hook lets you add state to functional components. Here's an example:
//       </p>
//       <pre className="bg-gray-100 p-4 rounded-md mb-4">
//         {`import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Current Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };`}
//       </pre>

//       <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">2. useEffect</h3>
//       <p className="mb-4 text-gray-800 leading-relaxed">
//         The `useEffect` hook allows you to perform side effects in your components. This could include data fetching, 
//         subscriptions, or manually changing the DOM. Here's an example:
//       </p>
//       <pre className="bg-gray-100 p-4 rounded-md mb-4">
//         {`import React, { useState, useEffect } from 'react';

// const DataFetcher = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []); // Empty dependency array means this effect runs once after the initial render.

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// };`}
//       </pre>

//       <h2 className="text-3xl font-semibold mt-6 mb-2 text-gray-800">Conclusion</h2>
//       <p className="mb-4 text-gray-800 leading-relaxed">
//         React Hooks have revolutionized how we manage state and side effects in our applications. They promote 
//         functional programming practices and allow for better code reuse. As you dive deeper into React, mastering 
//         Hooks will be essential for building efficient and scalable applications.
//       </p>
//     </div>
//   );
// };

// export default UnderstandingReactHooks;








'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const UnderstandingReactHooks: React.FC = () => {
  return (
    <div className="max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 py-4 bg-white">
      <Link href="/blog" className="text-blue-600 hover:underline mb-2 inline-block">
        Back to Blog
      </Link>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-center text-[#1e3a8a]">Understanding React Hooks</h1>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">October 22, 2024</p>
      <Image
        src="/images/reacts.png" // Update with your image path
        alt="Understanding React Hooks"
        width={500}
        height={500}
        className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg shadow-lg"
      />
      <p className="mb-4 text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        React Hooks are functions that let you use state and other React features without writing a class Hooks are a 
        powerful addition to React that allow you to manage state side effects and context in a more functional way 
        They were introduced in React 168 and have become a standard part of React development
      </p>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-2 text-gray-800">Why Use Hooks?</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        Hooks provide a way to encapsulate component logic making it easier to share and reuse across components 
        They also simplify the way components handle state and lifecycle events leading to cleaner and more readable code
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-2 text-gray-800">Commonly Used Hooks</h2>
      
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-2 text-gray-800">1/ useState</h3>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        The useState hook lets you add state to functional components Heres an example:
      </p>
      <pre className="bg-gray-100 p-2 sm:p-4 rounded-md mb-4 overflow-x-auto">
        {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white rounded px-3 py-2">Increment</button>
    </div>
  );
};`}
      </pre>

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-2 text-gray-800">2/ useEffect</h3>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        The useEffect hook allows you to perform side effects in your components This could include data fetching
        subscriptions or manually changing the DOM Heres an example:
      </p>
      <pre className="bg-gray-100 p-2 sm:p-4 rounded-md mb-4 overflow-x-auto">
        {`import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs once after the initial render.

  return (
    <ul className="list-disc pl-5">
      {data.map(item => (
        <li key={item.id} className="text-gray-800">{item.name}</li>
      ))}
    </ul>
  );
};`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-2 text-gray-800">Conclusion</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        React Hooks have revolutionized how we manage state and side effects in our applications They promote 
        functional programming practices and allow for better code reuse As you dive deeper into React mastering 
        Hooks will be essential for building efficient and scalable applications
      </p>
    </div>
  );
};

export default UnderstandingReactHooks;
