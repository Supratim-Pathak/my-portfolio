export default function About() {
  return (
    <div className="full-container ">
      <div className="container mx-auto rounded-lg text-start ">
        <img
          src="../Supratim-Pathak.jpg" // This is a dummy image URL
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto mb-6"
        />
        <h1 className="text-3xl text-white font-bold text-gray-800 mb-6">
          About Me
        </h1>
        <p className="text-lg text-base font-normal text-gray-500 dark:text-gray-400 leading-relaxed mb-4 ">
          Hi, I'm <strong>Supratim Pathak</strong>, a highly skilled web
          developer with over 3 years of experience specializing in the{" "}
          <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js).
          Throughout my career, I have developed responsive, scalable
          applications and optimized front-end performance, focusing on crafting
          efficient back-end solutions.
        </p>
        <p className="text-lg text-base font-normal text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          My passion for web development drives me to stay ahead of emerging
          trends, continuously enhancing my skill set to develop cutting-edge
          applications that meet modern industry standards. Whether it's
          enhancing a back-end's performance, deploying on serverless platforms,
          or integrating APIs to streamline workflows, I’m constantly pushing
          the boundaries of what's possible.
        </p>
        <p className="text-lg text-base font-normal text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          I have a proven ability to collaborate effectively with
          cross-functional teams to solve complex problems and deliver
          exceptional user experiences. I pride myself on my innovative
          problem-solving abilities and a strong foundation in various
          technologies like Docker, AWS, and TypeScript. I also ensure that my
          applications are built with high performance and security standards in
          mind.
        </p>
        <p className="text-lg text-base font-normal text-gray-500 dark:text-gray-400 leading-relaxed">
          When I'm not coding, I love to learn about new technologies and work
          on improving my existing skill set to remain versatile in this
          ever-evolving field.
        </p>
      </div>
      <div className="flex justify-end py-3">
        <a
          target="_blank"
          href="../SupratimPathak_WebDeveloper_CV.pdf"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Get my resume{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
