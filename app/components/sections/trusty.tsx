import Image from "next/image";

export const Trusties = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center">
          <h3 className="text-[#073141] uppercase text-[24px] font-extrabold tracking-[3.6px] font-manrope">
            TRUSTED BY
          </h3>
          <p className="text-[20px] text-[#073141] font-inter mt-[20px] mb-[40px] md:w-[1000px] text-center">
            DesignForge is trusted by leading organizations, industry
            professionals, and creative enthusiasts around the world. Our
            commitment to excellence, innovation, and community has earned us
            the trust and recognition of some of the most respected names in the
            digital art and design industry.
          </p>
        </div>
        <div className="flex  overflow-hidden">
          <div className="flex gap-[100px] items-center shrink-0 translate-x-[-100%] trustmarquwe">
            <Image src="/assets/2.png" alt="" width={186} height={48} />
            <Image src="/assets/3.png" alt="" width={76} height={48} />
            <Image src="/assets/4.png" alt="" width={228} height={48} />
            <Image src="/assets/5.png" alt="" width={256} height={48} />
            <Image src="/assets/6.png" alt="" width={124} height={48} />
            <Image src="/assets/7.png" alt="" width={127} height={48} />
          </div>
          <div className="flex gap-[100px] items-center shrink-0 translate-x-[-100%] trustmarquwe">
            <Image src="/assets/2.png" alt="" width={186} height={48} />
            <Image src="/assets/3.png" alt="" width={76} height={48} />
            <Image src="/assets/4.png" alt="" width={228} height={48} />
            <Image src="/assets/5.png" alt="" width={256} height={48} />
            <Image src="/assets/6.png" alt="" width={124} height={48} />
            <Image src="/assets/7.png" alt="" width={127} height={48} />
          </div>
          <div className="flex gap-[100px] items-center shrink-0 translate-x-[-100%] trustmarquwe">
            <Image src="/assets/2.png" alt="" width={186} height={48} />
            <Image src="/assets/3.png" alt="" width={76} height={48} />
            <Image src="/assets/4.png" alt="" width={228} height={48} />
            <Image src="/assets/5.png" alt="" width={256} height={48} />
            <Image src="/assets/6.png" alt="" width={124} height={48} />
            <Image src="/assets/7.png" alt="" width={127} height={48} />
          </div>
        </div>
      </div>
    </>
  );
};
