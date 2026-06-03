function Card() {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center items-center p-4 bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB]">
        <article className="flex flex-col lg:mx-0 md:mx-28 mx-4 w-full max-w-85 min-h-126 shadow-lg rounded-lg bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
          <img
            className="w-full h-72 object-cover"
            src="./src/assets/img/hero.jpg"
            alt=""
          />
          <div className="flex flex-col gap-3 px-4 py-6">
            <div className="flex flex-col gap-2">
              <div className=" flex justify-center items-center bg-green-50 border border-green-400 rounded-full w-17 h-6">
                <span className="text-green-700 text-sm">Interior</span>
              </div>
              <p className="text-lg font-semibold">
                Top 5 Living Room Inspirations
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-base font-medium text-neutral-600">
                Curated vibrants colors for your living, make it pop & calm in
                the same time.
              </p>
              <button className="flex items-center gap-1.5 curson-pointer">
                <span className="text-base font-medium text-indigo-700 ">
                  Read more
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4338CA"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right transition-transform duration-200 group-hover:translate-x-2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Card;
