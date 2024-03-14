function StudentFeedback() {
  return (
    <div>
      <div className="flex gap-10 items-center">
        <div className="w-2/3">
          <h2 className="font-bold text-3xl  w-[80%] m-auto my-10 text-left">
            Our Students Feedback
          </h2>
          <p className="font-medium text-xl  w-[80%] m-auto">
            At learning Exp. We are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals . Join
            Us Today And Embark On a Journey Of Discovery, Growth And Success.
          </p>
        </div>
        <div className="w-1/3 text-center ">
          <button className="font-semibold text-2xl bg-stone-100 border-solid border-[1px] text-stone-600 px-6 py-2 rounded-lg">
            <span>Read More</span>{" "}
            <span className="text-stone-800 font-bold text-3xl pl-2 ">
              &#8594;
            </span>
          </button>
        </div>
      </div>
      <div className="w-[85%] m-auto border-solid border-[1px] flex gap-10 bg-stone-200 rounded-lg  my-10">
        <div>
          <img src="Images/reviews.jpg" className="w-[300px] h-fit" />
        </div>
        <div className="p-10 pl-[50px] w-[40%]">
          <p className="text-2xl pb-4">⭐⭐⭐⭐⭐</p>
          <p className="text-sm text-stone-800">
            Learning at Exp. Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals
          </p>
          <h4 className="font-semibold text-stone-800 text-xl pb-3">Links</h4>
          <h4 className="font-semibold text-stone-800 text-sm pb-3">
            Product Manager :<span>@LearningCom</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default StudentFeedback;
