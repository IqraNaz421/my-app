'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'Introduction to TypeScript',
      date: 'October 15, 2024',
      description: 'A beginner-friendly guide to getting started with TypeScript.',
      link: 'typescript',
      image: '/images/typescript.jpg', // Path to your image
    },
    {
      title: 'Understanding React Hooks',
      date: 'October 22, 2024',
      description: 'A deep dive into React hooks and their usage.',
      link: 'react-hooks',
      image: '/images/reacts.png',
    },
    {
      title: 'CSS Grid vs Flexbox',
      date: 'October 29, 2024',
      description: 'Comparing CSS Grid and Flexbox for layout designs.',
      link: 'css',
      image: '/images/css.jpeg',
    },
    {
      title: 'Getting Started with Next.js',
      date: 'November 5, 2024',
      description: 'An introduction to building applications with Next.js.',
      link: 'nextjs',
      image: '/images/nextjs.jpg',
    },
    {
      title: 'JavaScript ES6 Features',
      date: 'November 12, 2024',
      description: 'Exploring the new features introduced in ES6.',
      link: 'java',
      image: '/images/java.jpg',
    },
    {
      title: 'Building RESTful APIs',
      date: 'November 19, 2024',
      description: 'A guide to building RESTful APIs with Node.js.',
      link: 'apis',
      image: '/images/apis.jpg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={post.link}>
              <Image
                src={post.image}
                alt={post.title}
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="text-gray-700 mt-2">{post.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
