function Card(){
    return (
        <>
            <main className="min-h-screen flex justify-center items-center p-4 bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB]">
                <div className="flex flex-col justify-center items-center gap-3 shadow-xl bg-white rounded-lg p-3 w-85 h-96">
                    <img className="h-15" src="./src/assets/profile.png" alt="" />
                    <div className="flex flex-col items-center">
                        <p className="font-medium text-xl" >Sarah Dole</p>
                        <span className="text-[#525252] text-sm font-normal">Front End Engineer @ Microsoft</span>
                    </div>
                    <p className="text-[#525252] text-base font-normal text-center">I turn coffee into bugs which are fixed by someone else. Certified Stact Overflow and ChatGPT Developer.</p>
                    <button className="bg-indigo-700 p-2 w-full text-white rounded mt-8">Contact me</button>
                    <div className="flex  gap-5 text-indigo-700 p-5">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Card;