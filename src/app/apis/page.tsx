// pages/BuildingRESTfulAPIs.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BuildingRESTfulAPIs: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 bg-white">
      {/* Blog Header */}
      <Link href="/blog"
         className="text-blue-600 hover:underline mb-4 inline-block">Back to Blog
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#1e3a8a]">
        Building RESTful APIs
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">October 24 2024</p>

      {/* Image Section */}
      <Image
        src="/images/apis.jpg" // Ensure the image is in /public/images/
        alt="Building RESTful APIs"
        width={500}
        height={500}
        className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg shadow-lg"
      />

      {/* Blog Content */}
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        RESTful APIs (Representational State Transfer) have become a key part of modern web development They provide a standardized way for applications to communicate with each other over HTTP
        This blog will walk you through the fundamentals of building RESTful APIs the best practices to follow and how to implement them using popular frameworks
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">1/ What is REST?</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        REST is an architectural style for designing networked applications It relies on a stateless client-server cacheable communication protocol—most commonly HTTP REST APIs allow different software applications to communicate and exchange data using standard HTTP methods like GET POST PUT and DELETE
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">2/ Key Principles of RESTful APIs</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        RESTful APIs adhere to a few key principles that guide their design and implementation:
      </p>
      <ul className="list-disc list-inside pl-4 mb-4 text-gray-800 leading-relaxed">
        <li><strong>Stateless</strong>: Each request from a client to a server must contain all the information needed to understand and process the request</li>
        <li><strong>Client-Server Architecture</strong>: The client and the server are separate entities allowing them to evolve independently</li>
        <li><strong>Cacheable</strong>: Responses must define whether they are cacheable or not to improve efficiency and performance</li>
        <li><strong>Uniform Interface</strong>: REST APIs use standard HTTP methods like GET POST PUT and DELETE and resource URIs (eg /users /posts)</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">3/ HTTP Methods in RESTful APIs</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        RESTful APIs use standard HTTP methods to perform different operations on resources These methods include:
      </p>
      <ul className="list-disc list-inside pl-4 mb-4 text-gray-800 leading-relaxed">
        <li><strong>GET</strong>: Retrieves data from the server (eg fetching user information)</li>
        <li><strong>POST</strong>: Sends new data to the server (eg creating a new user)</li>
        <li><strong>PUT</strong>: Updates an existing resource (eg updating a users details)</li>
        <li><strong>DELETE</strong>: Deletes a resource from the server (eg removing a user)</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">4/ Designing a RESTful API</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        When designing a RESTful API you need to think about the resources you are exposing and the actions users will take on them Each resource should have a unique URI and the API should use appropriate HTTP methods for each action Heres an example of how you might design a RESTful API for managing users:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          GET /users         - Retrieves a list of users<br />
          GET /users/{'{'}id{'}'}    - Retrieves a specific user by ID<br />
          POST /users        - Creates a new user<br />
          PUT /users/{'{'}id{'}'}    - Updates an existing user<br />
          DELETE /users/{'{'}id{'}'} - Deletes a user
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">5/ Best Practices for Building RESTful APIs</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        When building RESTful APIs its important to follow best practices to ensure your API is easy to use scalable and maintainable Some best practices include:
      </p>
      <ul className="list-disc list-inside pl-4 mb-4 text-gray-800 leading-relaxed">
        <li><strong>Use Meaningful Resource Names</strong>: Use nouns (eg /users /posts) instead of verbs for resource URIs</li>
        <li><strong>Statelessness</strong>: Ensure that the server does not store any state related to the client between requests</li>
        <li><strong>Versioning</strong>: Use versioning to avoid breaking changes for your users (eg /v1/users /v2/users)</li>
        <li><strong>Return Appropriate Status Codes</strong>: Use HTTP status codes to inform clients of the result (eg 200 OK 201 Created 400 Bad Request)</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">6/ Example of a RESTful API</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Below is a simple example of how to build a RESTful API using Expressjs (a popular Nodejs framework) This API allows users to manage a list of tasks:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
        <code>
          const express = require(express);<br />
          const app = express();<br />
          app use(express json());<br /><br />
          const tasks = [];<br /><br />
          app get(/tasks (req res) = {'{'}<br />
          &nbsp;&nbsp;res json(tasks);<br />
          {'}'});<br /><br />
          app post(/tasks (req res) = {'{'}<br />
          &nbsp;&nbsp;const task = {'{'} id: tasks.length + 1 name: req.body.name {'}'};<br />
          &nbsp;&nbsp;tasks.push(task);<br />
          &nbsp;&nbsp;res.status(201).json(task);<br />
          {'}'});<br /><br />
          app.listen(3000 () = {'{'}<br />
          &nbsp;&nbsp;console.log(Server running on port 3000);<br />
          {'}'});<br />
        </code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Conclusion</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Building RESTful APIs is a crucial skill for any web developer By following REST principles and best practices you can create APIs that are scalable maintainable and easy to use Using frameworks like Expressjs simplifies the process allowing you to focus on your APIs functionality rather than boilerplate code
      </p>
    </div>
  );
};

export default BuildingRESTfulAPIs;
