function Footer() {
  return (
    <div className="bg-stone-100">
      <div className="flex justify-between w-[80%] m-auto py-10 pt-[60px] ">
        <div>
          <div className="flex gap-2 p-8 items-center ">
            <img
              src="Images/images.png"
              alt="logo image"
              className="w-10 h-10 mr-2"
            />
            <h3 className="font-semibold text-2xl font text-stone-800 tracking-wider">
              Learning Exp.
            </h3>
          </div>
          <div className="flex gap-2 px-8 ">
            <img
              src="Images/fb.jpg"
              alt="facebook logo"
              className="w-10 h-10"
            />
            <img
              src="Images/twitter.png"
              alt="facebook logo"
              className="w-10 h-10"
            />
            <img
              src="Images/linked.png"
              alt="facebook logo"
              className="w-10 h-10"
            />
            <img
              src="Images/pinterest.png"
              alt="facebook logo"
              className="w-10 h-10"
            />
          </div>
        </div>
        <div className="text-stone-500 text-lg">
          <h4 className="font-semibold text-stone-700 text-2xl pb-3">Links</h4>
          <p>Home</p>
          <p>Pricing</p>
          <p>download</p>
          <p>About</p>
          <p>Service</p>
        </div>
        <div className="text-stone-500 text-lg">
          <h4 className="font-semibold text-stone-700 text-2xl pb-3">
            Support
          </h4>
          <p>FAQ</p>
          <p>Features</p>
          <p>download</p>
          <p>Contact</p>
          <p>Reporting</p>
        </div>
        <div className="text-stone-500 text-lg">
          <h4 className="font-semibold text-stone-700 text-2xl pb-3">
            Contact Us
          </h4>
          <p>+880 1234 5678</p>
          <p>youremail.com</p>
          <p>Pune City</p>
        </div>
      </div>
      <div className="flex justify-between w-[80%] m-auto py-10">
        <p>Copyright & Design By Learning Exp.</p>
        <div className="flex gap-6">
          <p>Terms of Use </p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
