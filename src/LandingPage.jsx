function LandingPage() {
  return (
    <div
      className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 bg-opacity-90 bg-cover bg-center h-screen py-10"
      style={{ backgroundImage: 'url("Images/studentstudying.jpg")' }}
    >
      <header className="flex justify-between items-center w-[90%] m-auto">
        <div className="flex gap-2 p-8 items-center ">
          <img
            src="Images/images.png"
            alt="logo image"
            className="w-10 h-10 mr-2"
          />
          <h3 className="font-semibold text-2xl font text-stone-100 tracking-wider">
            Learning Exp.
          </h3>
        </div>

        <nav className="font-bold text-2xl  text-yellow-100 px-8">
          <button className="p-3 mr-3">Home</button>
          <button className="p-3 mr-3">Services Us</button>
          <button className="p-3 mr-3">Why Us</button>
          <button className="p-3 mr-3">Our Goals</button>
          <button className="p-3 mr-3 border-[1px] border-solid border-yellow-300 bg-yellow-300 text-stone-800 rounded-[20px]">
            Contact Us
          </button>
        </nav>
      </header>
      <div className="flex justify-between pb-10 w-[80%] m-auto">
        <div className="p-10">
          <h1 className="text-5xl font-semibold text-stone-100 pt-10 ">
            We Create Learning Experience With Excellent Teachnology
          </h1>
          <p className="text-sm font-medium text-stone-100  pt-3 px-3">
            Unlimited Access To 100+ World Class Courses, Hands-On Products, And
            Job Ready Certificate Programs-
          </p>
          <p className="text-sm font-medium text-stone-100   px-3 mb-8">
            All Included in Your subscription
          </p>
          <div>
            <button className="p-3 mr-3 border-[1px] border-solid border-yellow-300 bg-yellow-400 text-stone-900 rounded-[20px] text-2xl font-bold">
              Book Demo Class
            </button>
            <button className="font-semibold text-2xl  text-yellow-100 px-4">
              Explore More <span>&#8594;</span>
            </button>
          </div>
        </div>
        <div className="p-10 ">
          <iframe
            className="border-solid rounded-2xl border-[10px]  border-violet-300"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9_FQW36r0n8?si=L6o8Z6VDRDlmdPY8"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
