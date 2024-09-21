export default function Edu() {
  return (
    <>
      <div className="overflow-hidden mt-10">
        <a
          href="#"
          target="_blank"
          className="text-white font-semibold"
        >
          <h3 className="font-semibold text-3xl text-white mb-4">Education</h3>
        </a>
        <div className="flex space-x-2 divide-x-2 divide-gray 300 text-white items-center">
          <div className="flex space-x-2 flex-shrink-0 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-opacity-25">2018 -&nbsp;</span>
          </div>
          <div className="pl-2 truncate text-opacity-20">
            Adamas institute of technology &nbsp;|&nbsp; B.tech &nbsp;|&nbsp;
            <span className="text-white font-semibold">&nbsp;C.G.P.A: 7.40</span>
          </div>
        </div>
      </div>
    </>
  );
}
