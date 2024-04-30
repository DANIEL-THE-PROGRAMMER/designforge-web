import Image from "next/image";


export const Awards = () => {
    return (
      <>
        <div className="py-[200px] flex flex-col items-center">
          <h3 className="text-[#073141] uppercase text-[24px] font-extrabold tracking-[3.6px] font-manrope">
            Awards
          </h3>
          <p className="text-[20px] text-[#073141] font-inter mt-[20px] mb-[40px] md:w-[1000px] text-center">
            At DesignForge, we take pride in the success and satisfaction of our
            members. But don{"'"}t just take our word for it—hear what our
            community has to say about their experience with DesignForge.
          </p>
          <div className="flex md:w-[1000px] justify-between items-center">
            <Image src="/assets/landing-page-award-1 (1).png" alt="" width={204} height={100} />
            <Image src="/assets/landing-page-award-2.png" alt="" width={123} height={100} />
            <Image src="/assets/landing-page-award-3.png" alt="" width={198} height={100} />
            <Image src="/assets/landing-page-award-4.png" alt="" width={204} height={100} />
          </div>
        </div>
      </>
    );
}