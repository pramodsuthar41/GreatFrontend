function TextInput() {
  return (
    <>
      <main className="flex justify-center mt-20">
        <div id="form">
          <form action="" className="flex flex-col gap-10 ">
            <div>
              <label htmlFor="">Email</label>
              <div className="relative ">
                <input
                  className="border border-gray-300 bg-gray-100 py-2 pl-4 w-100 rounded"
                  type="text"
                  placeholder="name@email.com"
                />
                <i className="fa-regular fa-circle-question absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <p className="text-gray-500">This is hint text.</p>
            </div>

            <div>
              <label htmlFor="">Email</label>
              <div className="relative">
                <input
                  className="border border-gray-300 bg-gray-100 py-2 pl-4 w-100 rounded" 
                  type="text"
                  placeholder="name@email.com"
                />
                <i className="fa-regular fa-circle-question absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <p className="text-gray-500">This is hint text.</p>
            </div>

            <div>
              <label htmlFor="">Email</label>
              <div className="relative">
                <input
                  className=" bg-gray-100 py-2 pl-4 w-100 rounded"
                  type="text"
                  placeholder="name@email.com"
                />
                <i className="fa-regular fa-circle-question absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <p className="text-gray-500">This is hint text.</p>
            </div>

            <div>
              <label htmlFor="">Email</label>
              <div className="relative">
                <input
                  className="border border-gray-300 bg-gray-100 py-2 pl-4 w-100 rounded" 
                  type="text"
                  placeholder="name@email.com"
                />
                <i className="fa-regular fa-circle-question absolute right-3 top-1/2 -translate-y-1/2 text-red-700"></i>
              </div>
              <p className="text-red-700">This is an error message.</p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default TextInput;
