function ContactUs() {
  return (
    <div className="bg-blue-900 w-[50%] m-auto flex justify-between gap-5 p-6 rounded-2xl">
      <div>
        <h3 className="font-medium text-xl font text-stone-50 tracking-wider">
          Learning Exp.
        </h3>
        <p className="text-stone-100 text-sm tracking-tighter ">
          There are many variations of passages of Lorem Ipsum but the majority
          have suffered adulteration
        </p>
      </div>
      <div className="relative ">
        <input
          type="text"
          placeholder="Email here"
          className="px-5 py-3 rounded-2xl relative"
        />
        <button className="p-2 px-5 mr-3 border-[1px] border-solid border-yellow-300 bg-yellow-300 text-stone-800 rounded-2xl absolute right-0 top-0 my-1">
          Send
        </button>
      </div>
    </div>
  );
}
export default ContactUs;
