import React from "react";

export default function Projects() {
  const ProjectList = [{ name: "" }];

  return (
    <div className="mt-20 ">
      <div>
        <h1 className="font-semibold text-3xl text-white">Projects</h1>
      </div>
      <a
        href="https://github.com/Supratim-Pathak/Web-AI-writer"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="py-6 px-3 grid grid-cols-1 gap-2 mt-4 sm:grid-cols-1 md:grid-cols-1 cursor-pointer shadow-lg border rounded-md border-opacity-25">
          <span className="text-white text-2xl font-semibold">
           ✍️🚀AI Writing Assistant - Chrome Extension 
          </span>
          <p className="text-white font-sans font-semibold">
            Technologies: AI, LLM ,React.js, Vite.js, Open route API, axios 
          </p>
          <span className="text-base font-normal text-gray-500 dark:text-gray-400">
          
          An AI-powered Chrome extension that corrects grammar, improves clarity, and refines tone. Works offline using local LLMs for privacy-friendly text suggestions. Supports multiple tones: Personable, Confident, Empathetic, Engaging, Witty, and Direct. Enhance your writing effortlessly!
          </span>
        </div>
      </a>
      <a
        href="https://www.npmjs.com/package/max-rbac"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="py-6 px-3 grid grid-cols-1 gap-2 mt-4 sm:grid-cols-1 md:grid-cols-1 cursor-pointer shadow-lg border rounded-md border-opacity-25">
          <span className="text-white text-2xl font-semibold">
            🚀 Role-Permission Package (max-rcba)
          </span>
          <p className="text-white font-sans font-semibold">
            Technologies: Node.js, Express.js, MongoDB, Mongoose
          </p>
          <span className="text-base font-normal text-gray-500 dark:text-gray-400">
            Developed a lightweight and flexible Role-Based Access Control
            (RBAC) system for Node.js applications using MongoDB. It enables
            managing users, roles, and permissions efficiently with built-in
            middleware for authorization. Ideal for SaaS applications, admin
            dashboards, and enterprise software.
          </span>
        </div>
      </a>
      <div className="py-6 px-3 grid grid-cols-1 gap-2 mt-4 sm:gird-cols-1 md:grid-cols-1 cursor-pointer shadow-lg border rounded-md border-opacity-25">
        <span className="text-white text-2xl font-semibold">
          🎉 Shipment Tracking System
        </span>
        <p className="text-white font-sans font-semibold">
          Technologies: Laravel, PHP, Third-party API Integration
        </p>
        <span className="text-base font-normal text-gray-500 dark:text-gray-400">
          Developed a comprehensive shipment tracking system, allowing real-time
          updates and synchronization between multiple warehouses. Integrated
          third-party APIs for seamless data exchange and enhanced user
          experience.
        </span>
      </div>
      <div className="py-6 px-3 grid grid-cols-1 gap-2 mt-4 sm:gird-cols-1 md:grid-cols-1 cursor-pointer shadow-lg border rounded-md border-opacity-25">
        <span className="text-white text-2xl font-semibold">
          🎉 Portfolio Website
        </span>
        <p className="text-white font-sans font-semibold">
          Technologies: Next.js, Node.js, Vercel
        </p>
        <span className="text-base font-normal text-gray-500 dark:text-gray-400">
          Built a personal portfolio website using Next.js for server-side
          rendering and React's dynamic components. Hosted the site on Vercel
          for scalable deployment and optimized performance. The site features
          responsive design, project showcases, and a contact form.
        </span>
      </div>
    </div>
  );
}
