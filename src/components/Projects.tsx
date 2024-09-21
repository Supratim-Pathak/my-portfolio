import React from "react";

export default function Projects() {
  const ProjectList = [{ name: "" }];

  return (
    <div className="mt-20 ">
      <div>
        <h1 className="font-semibold text-3xl text-white">Projects</h1>
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
    </div>
  );
}
