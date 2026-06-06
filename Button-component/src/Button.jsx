function Button() {
  return (
    <>
      <main className="flex flex-col flex-1 justify-center items-center p-10 gap-10">
        <div id="button1" className="flex items-center gap-10">
          <button className="bg-indigo-700 py-1 px-5 h-10 text-white rounded">
            Button CTA
          </button>
          <button className="flex items-center gap-2 bg-indigo-700 py-1 px-5 h-12 text-white rounded">
            <i className="fa-regular fa-star"></i>
            Button CTA
          </button>
          <button className="flex items-center gap-3 bg-indigo-700 py-1 px-5 h-14 text-white rounded">
            Button CTA
            <i className="fa-regular fa-star"></i>
          </button>
          <button className="bg-indigo-700 py-1 px-8 h-16 text-white rounded">
            Button CTA
          </button>
          <button className="bg-indigo-700 text-white h-16 p-4 rounded">
            <i className="fa-regular fa-star"></i>
          </button>
        </div>

        <div id="button2" className="flex items-center gap-10">
          <button className="text-black py-1 px-5 h-10 rounded shadow-md">
            Button CTA
          </button>
          <button className="text-black py-1 px-5 h-12 rounded shadow-md flex items-center gap-3">
            <i className="fa-regular fa-star"></i>
            Button CTA
          </button>
          <button className="text-black py-1 px-5 h-14 rounded shadow-md flex items-center gap-3">
            Button CTA
            <i className="fa-regular fa-star"></i>
          </button>
          <button className="text-black py-1 px-8 h-16 rounded border-none shadow-md">
            Button CTA
          </button>

          <button className=" text-black h-16 shadow-md p-4 rounded">
            <i className="fa-regular fa-star"></i>
          </button>
        </div>

        <div id="button3" className="flex items-center gap-10">
          <button className="text-indigo-700 p-5 ">Button CTA</button>
          <button className="text-indigo-700 p-5 flex items-center gap-3">
            <i className="fa-regular fa-star"></i>
            Button CTA
          </button>
          <button className="text-indigo-700 p-5 flex items-center gap-3">
            Button CTA
            <i classname="fa-regular fa-star"></i>
          </button>
          <button className="text-indigo-700 p-5  ">Button CTA</button>

          <button className=" text-indigo-700 ">
            <i className="fa-regular fa-star"></i>
          </button>
        </div>

        <div id="button4" className="flex items-center gap-10">
          <button className="text-indigo-700 ">Button CTA</button>
          <button className="text-indigo-700   flex items-center gap-3">
            <i className="fa-regular fa-star"></i>
            Button CTA
          </button>
          <button className="text-indigo-700  flex items-center gap-3">
            Button CTA
            <i className="fa-regular fa-star"></i>
          </button>
          <button className="text-indigo-700   ">Button CTA</button>

          <button className=" text-indigo-700 ">
            <i className="fa-regular fa-star"></i>
          </button>
        </div>

        <div id="button5" className="flex items-center gap-10">
          <button className="text-black">Button CTA</button>
          <button className="text-black flex items-center gap-3">
            <i className="fa-regular fa-star"></i>
            Button CTA
          </button>
          <button className="text-black flex items-center gap-3">
            Button CTA
            <i className="fa-regular fa-star"></i>
          </button>
          <button className="text-black">Button CTA</button>

          <button className=" text-black">
            <i className="fa-regular fa-star"></i>
          </button>
        </div>

        <div id="button6" className="flex items-center gap-10">
          <button className="text-white bg-red-600 py-1 px-5 h-10 rounded ">
            Button CTA
          </button>
          <button className="text-white bg-red-600 py-1 px-3 h-12 rounded   flex items-center gap-3">
            <i className="fa-regular fa-star"></i>
            Button CTA
          </button>
          <button className="text-white bg-red-600 py-1 px-4 h-14 rounded   flex items-center gap-3">
            Button CTA
            <i className="fa-regular fa-star"></i>
          </button>
          <button className="text-white bg-red-600  px-8 h-16 rounded  ">
            Button CTA
          </button>

          <button className=" text-white bg-red-600 h-16  p-4 rounded">
            <i className="fa-regular fa-star"></i>
          </button>
        </div>
      </main>
    </>
  );
}

export default Button;
