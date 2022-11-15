import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div className='blog-container flex flex-col gap-5 p-6'>

      <div className='first-question rounded-xl p-6 mx-auto'>
        <h1 className='text-2xl font-medium mb-3'>Q. How does react work?</h1>
        <p className='text-lg'>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
          A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.<br /> React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
        </p>
      </div>

      <div className='second-question rounded-xl p-6'>
        <h1 className='text-2xl font-medium mb-3'>Q. Props vs State?</h1>
        <table className='w-full mx-auto border'>
          <thead>
            <tr>
              <th>Props</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.Props are read only.</td>
              <td>1.State changes can be asynchronous.</td>
            </tr>
            <tr>
              <td>2.Props can't be modified.</td>
              <td>2. state can be modified using this.setState</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="third-question rounded-xl p-6">
        <h1 className='text-2xl font-medium mb-3'>
          Q. Where can we use useEffect other than api calling?
        </h1>
        <p className='text-lg'>
          1. Running on state change: validating input field.
          <br />
          2. Running on state change: live filtering. <br />
          3. Running on state change: trigger animation on new array value. <br />
          4. Running on props change: update paragraph list on fetched API data update.
        </p>
      </div>

    </div>
  );
};

export default Blog;