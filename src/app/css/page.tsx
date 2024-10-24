// pages/CSSGridVsFlexbox.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CSSGridVsFlexbox: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 bg-white">
      {/* Blog Header */}
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        Back to Blog
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#1e3a8a]">
        Comparing CSS Grid and Flexbox for Layout Designs
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">October 24 2024</p>

      {/* Image Section */}
      <Image
        src="/images/css.jpeg"  // Adjust the image source accordingly
        alt="CSS Grid vs Flexbox"
        width={500}
        height={500}
        className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg shadow-lg"
      />

      {/* Blog Content */}
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        CSS Grid and Flexbox are two modern layout systems available in CSS both of which revolutionize how web developers create complex layouts Each has its strengths and weaknesses, and understanding when to use each can greatly improve your front-end design process In this post well compare CSS Grid and Flexbox to help you decide which is best suited for your layout needs
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">CSS Grid: Two-Dimensional Layout</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        CSS Grid is a two-dimensional layout system It allows you to work with both rows and columns making it perfect for building more complex layouts where elements need to align in multiple directions You can control the position of elements based on the grid lines
      </p>

      <ul className="list-disc pl-5 mb-4 text-gray-800 leading-relaxed">
        <li><strong>Grid Template:</strong> CSS Grid gives you the ability to define a grid structure with rows and columns using the <code>grid-template-rows</code> and <code>grid-template-columns</code> properties</li>
        <li><strong>Precise Layout:</strong> With CSS Grid you can precisely position items in a grid specifying how many columns and rows an item will span.</li>
        <li><strong>Nested Grids:</strong> CSS Grid allows for nesting grids providing even more flexibility for complex layouts</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Flexbox: One-Dimensional Layout</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Flexbox is a one-dimensional layout system that works either in a row or a column Its best for distributing items along a single axis whether horizontal or vertical Flexbox is great for smaller components of your layout such as navigation bars or aligning items in a row
      </p>

      <ul className="list-disc pl-5 mb-4 text-gray-800 leading-relaxed">
        <li><strong>Flexible Items:</strong> Flexbox is designed to distribute space along an axis allowing items to shrink or grow depending on the available space</li>
        <li><strong>Alignment:</strong> With properties like <code>align-items</code> and <code>justify-content</code>you can easily align items along the cross and main axis</li>
        <li><strong>Wrap Flexibility:</strong> Flexbox allows items to wrap onto multiple lines if necessary using the <code>flex-wrap</code> property</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">When to Use CSS Grid</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        CSS Grid is ideal for layouts where you need both rows and columns such as entire page layouts dashboards or gallery views Its perfect when you want to control both horizontal and vertical placement of items with a grid system
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">When to Use Flexbox</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        Flexbox is best suited for simpler one-dimensional layouts, such as navigation bars, card layouts or aligning elements within a container Its most effective when dealing with content that flows in a single direction either row or column
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Key Differences Between CSS Grid and Flexbox</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        While both systems are incredibly powerful the main difference lies in their focus CSS Grid is built for two-dimensional layouts making it ideal for controlling both row and column positioning while Flexbox is designed for one-dimensional layouts where you control items along a single axis
      </p>

      <ul className="list-disc pl-5 mb-4 text-gray-800 leading-relaxed">
        <li><strong>Grid:</strong> Best for creating entire page layouts.</li>
        <li><strong>Flexbox:</strong> Best for smaller components or aligning items in one direction</li>
        <li><strong>Complexity:</strong> CSS Grid can handle more complex layouts while Flexbox is more intuitive for simple layouts</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-6 mb-2 text-gray-800">Conclusion</h2>
      <p className="mb-4 text-gray-800 leading-relaxed text-justify">
        CSS Grid and Flexbox both have their strengths and they can often be used together For complex two-dimensional layouts CSS Grid is your best bet For simpler one-dimensional arrangements Flexbox will likely be more efficient Understanding when to use each will help you create more responsive and maintainable layouts
      </p>
    </div>
  );
};

export default CSSGridVsFlexbox;
