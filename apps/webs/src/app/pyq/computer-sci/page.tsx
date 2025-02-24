import { Nav } from "@/components/Nav";

const page = () => {
  return (
    <section className="">
      <Nav />
      <div className=" grid grid-cols-2 items-center justify-between w-[1400px] mx-auto mt-[64px]">
        <div className="">ai</div>
        <div className=" p-2 w-full  ">
          <iframe
            src="/pdfs/CSC-301_DSA.pdf"
            width="100%"
            height="600px"
            frameBorder={0}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default page;
