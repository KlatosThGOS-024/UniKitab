const HeroSection = () => {
  return (
    <>
      <section
        className="h-[880px] bg-[#50CAF4]
   bg-[#] w-full  mx-auto overflow-hidden  "
      >
        <div className="p-[54px] relative text-center items-center gap-[96px] flex mx-auto w-[1560px]">
          <div className="">
            <h2 className=" font-custom text-[48px] text-white leading-[48x]">
              See what you can achieve!
            </h2>
            <p className=" font-custom text-[24px] leading-[24x]  text-white">
              Free pyqs, pdf
            </p>
            <div className=" mt-[64px]">
              <button
                className=" group transition-all duration-300
               bg-[#e95645] hover:opacity-[0.9]
              text-white px-7 border-[2px]  py-3 font-[500] relative leading-[34px]
               font-custom rounded-md  "
              >
                <span className="relative transition-all duration-300 ease-in-out group-hover:right-[14px] ">
                  GET STARTED FOR FREE
                </span>
              </button>
            </div>
          </div>
          <div className=" overflow-hidden max-w-[100%] ">
            <img
              src="/images\landing_page-removebg-preview.png"
              className="w-full h-[656px]  "
              alt="img"
            ></img>
          </div>
        </div>
      </section>
      <div className=" relative -top-[148px]  rotate-180 -scale-y-100 w-full  ">
        <img className="w-full overflow-hidden " src="/images\download.svg" />
      </div>
    </>
  );
};
export default HeroSection;
