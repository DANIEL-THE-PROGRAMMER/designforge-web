import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="container mx-auto pt-[200px] pb-[120px] justify-between flex items-start">
        <Image src="/assets/logo.png" alt="" width={204} height={51} />
        <div className="flex flex-col gap-[12px]">
          <span className="text-[#062A44] font-medium leading-[22px] text-[16px] font-inter">
            Features
          </span>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Stuff for Designers
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Cool Stuff
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Random Feature
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Another One
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Last Time
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <span className="text-[#062A44] font-medium leading-[22px] text-[16px] font-inter">
            About
          </span>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-[#325168] leading-[20px]">
              DesignForge
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Privacy
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Terms
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              F.A.Q
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <span className="text-[#062A44] font-medium leading-[22px] text-[16px] font-inter">
            Resources
          </span>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Resources
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Helpful guide
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Inspiring Workshops
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Tutorials
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <span className="text-[#062A44] font-medium leading-[22px] text-[16px] font-inter">
            Social Media
          </span>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Twitter
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Facebook
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Instagram
            </span>
            <span className="text-[14px] text-[#325168] leading-[20px]">
              Youtube
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
