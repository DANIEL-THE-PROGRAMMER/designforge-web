import Image from "next/image";

export const HeroHeader = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="pt-[115px] px-[115px] flex justify-center gap-[50px] items-center">
          <div className="flex flex-col gap-[50px]">
            <h1 className="text-[64px] font-manrope font-semibold text-[#073141]">
              Unveiling the mastery behind every pixel{"'"}s life. Tour our
              digital art paradise!
            </h1>
            <div className="flex gap-[30px] items-center">
              <button className="outline-none border-none w-[192px] min-h-[50px] bg-[#1D7293] text-white text-[18px] font-semibold font-inter rounded-[12px] shadow-bs">
                See Artwork
              </button>
              <button className="outline-none border-none w-[192px] min-h-[50px]  text-[#1D7293] text-[18px] font-semibold font-inter rounded-[12px] shadow-bs bg-[#F6FDFF]">
                Meet Artists
              </button>
            </div>
          </div>
          <Image
            src="/assets/philip-oroni-wG5L6vNI9pE-unsplash-removebg-preview 1.png"
            alt=""
            width={547}
            height={569}
          />
        </div>
      </div>
    </>
  );
};
