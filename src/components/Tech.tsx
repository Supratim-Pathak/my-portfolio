import Image from "next/image";
import {
  HTML5,
  CSS,
  JS,
  NODE,
  MONGO,
  EXPRESS,
  AWS,
  GIT,
  NEXT,
  TAILWIND,
  DOCKER,
  REACT,
  LARAVEL
} from "../svg";
export default function Tech() {
  const techlist = [
    { name: "Html", logo: <HTML5 /> },
    { name: "CSS", logo: <CSS /> },
    { name: "JavaScript", logo: <JS /> },
    { name: "Node.js", logo: <NODE /> },
    { name: "Express Js.", logo: <EXPRESS /> },
    { name: "React.js", logo: <REACT /> },
    { name: "Mongo DB", logo: <MONGO /> },
    { name: "Next.js", logo: <NEXT /> },
    { name: "Tailwind CSS", logo: <TAILWIND /> },
    { name: "AWS", logo: <AWS /> },
    { name: "Docker", logo: <DOCKER /> },
    { name: "Git", logo: <GIT /> },
    { name: "Laravel", logo: <LARAVEL /> },
  ];

  return (
    <>
      <div className="mt-20">
        <div>
          <h1 className="font-semibold text-3xl text-white">
            Technologies I use
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-4 sm:gird-cols-3 md:grid-cols-4">
          {techlist.map((data, index) => {
            return (
              <>
                <div className="flex space-x-2 text-white items-center overflow-hidden">
                  {data.logo}
                  <span className="lang font-medium">{data.name}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
