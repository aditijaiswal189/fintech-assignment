function WhyUs() {
  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl  w-[50%] m-auto my-10 text-center">
          Why Us
        </h2>
        <p className="font-medium text-xl  w-[60%] m-auto">
          At learning Exp. We are Committed To Providing You With A Superior
          Learning Experience That Empowers You To Achieve Your Goals . Join Us
          Today And Embark On a Journey Of Discovery, Growth And Success.
        </p>
      </div>
      <div className="flex justify-between py-10 w-[80%] m-auto">
        <div className="p-[60px] ">
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
        <div className="p-10">
          <h2 className="text-3xl font-semibold text-stone-900 pt-10 ">
            Crafting Your Dream Career:
          </h2>
          <h2 className="text-3xl font-semibold text-stone-900  ">
            Building a Path You Love With Us
          </h2>
          <p className="text-sm font-medium text-stone-600  pt-3 px-3">
            At learning Exp. We are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals . Join
            Us Today And Embark On a Journey Of Discovery, Growth And Success.
          </p>
          <p className="text-sm font-medium text-stone-800   px-3 mb-8">
            Our Platform Is Designed To Empower Learers Like You To Excel in
            Dynamic World.
          </p>
          <div>
            <button className="p-3 mr-3 border-[1px] border-solid border-yellow-300 bg-yellow-400 text-stone-900 rounded-[20px] text-2xl font-bold">
              Get More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
