import Edu from "@/components/Education";
import Repo from "@/components/Repository/Repo";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import Head from "next/head";
import Link from "next/link";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title={"Home"}></Seo>
      <main>
        <div className="full-container flex">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white">
              <Link href="/">Hi, I'm Supratim Pathak</Link>
            </h1>
            <p className="mt-5 font-normal leading-relaxed">
              Hi, I'm Web Developer and a tech enthusiast, I have about 3+ years
              of experience with JavaScript. MongoDB, Express.js, React.js,
              Node.js, Laravel are the technologies I use all the time.{" "}
              <Link className="underline text-blue-200" href="/about">
                (Would you like to learn more about me)
              </Link>
            </p>
          </div>
        </div>

        <div className="full-container mt-10">
          <Tech />
        </div>

        <div className="full-container mt-20">
          <Repo />
        </div>

        <div className="full-container mt-10">
          <Projects />
        </div>

        <div className="full-container mt-10">
          <Edu />
        </div>
      </main>

      <footer className="w-full bottom-0 text-white bg-gray-900 bg-opacity-50 mt-10">
        <div className="py-3 px-3 mx-auto flex items-center sm:flex-row flex-col ">
          <div>
            <div className="text-sm font-semibold sm:ml-2 sm:pl-4 sm:mt-1 mt-4">
              © Supratim pathak &nbsp;| 2024 &nbsp;| All rights reserved.&nbsp;
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
