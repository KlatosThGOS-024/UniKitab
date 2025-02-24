import { Nav } from "@/components/Nav";

const page = () => {
  return (
    <section className="bg-white">
      <Nav />
      <div className=" grid grid-cols-2 items-center justify-between w-[1400px] mx-auto mt-[64px]">
        <div className="">ai</div>
        <div className=" p-2   w-full h-screen">
          <iframe
            src="apps/webs/public/pdfs/CSC-301_DSA.pdf"
            width="90%"
            height="600px"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default page;
