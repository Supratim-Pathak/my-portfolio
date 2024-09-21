import { MONGO, NEXT, NODE, REACT } from "@/svg";

export default function Repo() {
  const courses = [
    {
      id: "1",
      name: "NodeJS - The Complete Guide",
      platform: "Udemy",
      date: "March 19, 2023",
      link: "NodeJS - The Complete Guide",
    },
    {
      id: "2",
      name: "MongoDB - The Complete Developer's Guide 2023",
      platform: "Udemy",
      date: "Dec 27, 2023",
      link: "MongoDB - The Complete Developer's Guide 2023",
    },
    {
      id: "3",
      name: "Next.js 14 & React - The Complete Guide",
      platform: "Udemy",
      date: "March 04, 2024",
      link: "Next.js 14 & React - The Complete Guide",
    },
    {
      id: "4",
      name: "React - The Complete Guide 2024 (incl. Next.js, Redux)",
      platform: "Udemy",
      date: "March 8, 2024",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-5ec79c26-f391-4c2b-8949-8ace44c1c5b8.jpg",
    },
    {
      id: "4",
      name: "Docker for the Absolute Beginner - Hands On - DevOps",
      platform: "Udemy",
      date: "March 17, 2024",
      link: "Docker for the Absolute Beginner - Hands On - DevOps",
    },
  ];

  return (
    <>
      <section>
        <h2 className="font-semibold text-3xl text-white">My certifications</h2>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25 ">
            <a
              href="https://github.com/AdemCanCertel/website"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Udemy</span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  🏅 NodeJS - The Complete Guide
                </p>
                <div className="mt-1">
                  <NODE />
                </div>
              </div>
            </a>
          </div>

          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25 ">
            <a
              href="https://github.com/AdemCanCertel/website"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Udemy</span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  🏅 React - The Complete Guide 2024
                </p>
                <div className="mt-1">
                  <REACT />
                </div>
              </div>
            </a>
          </div>
          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25 ">
            <a
              href="https://github.com/AdemCanCertel/website"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Udemy</span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  🏅 MongoDB - The Complete Developer's Guide 2024
                </p>
                <div className="mt-1">
                  <MONGO />
                </div>
              </div>
            </a>
          </div>
          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25 ">
            <a
              href="https://github.com/AdemCanCertel/website"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Udemy</span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  🏅Next.js 14 & React - The Complete Guide
                </p>
                <div className="mt-1">
                  <NEXT />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
