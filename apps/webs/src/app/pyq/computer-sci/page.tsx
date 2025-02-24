import { Nav } from "@/components/Nav";

const page = () => {
  return (
    <section className="bg-white">
      <Nav />
      <div className=" grid grid-cols-2 items-center justify-between w-[1400px] mx-auto mt-[64px]">
        <div className="">ai</div>
        <div className=" p-2 ">
          <embed
            src="/pdfs/CSC-301_DSA.pdf"
            width="100%"
            height="600px"
            type="application/pdf"
          ></embed>
        </div>
      </div>
    </section>
  );
};
export default page;
