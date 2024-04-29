import Image from "next/image";

export const Featured = () => {
  return (
    <>
      <div>
        <div className="flex flex-col  px-[215px] container mx-auto items-center">
          <h3 className="text-[#073141] uppercase text-[24px] font-extrabold tracking-[3.6px] font-manrope">
            Featured Artwork Showcase
          </h3>
          <p className="text-[18px] text-[#073141] font-inter mt-[20px] mb-[40px] text-center">
            Stunning digital artworks created by DesignForge members.
          </p>
        </div>
        <div className="p-[40px] grid grid-cols-4 gap-[40px]">
          {Images.map((image, index) => {
            return (
              <div className="h-[414px] relative" key={index + 1}>
                <Image src={`${image}`} alt="" fill={true} sizes="100vw" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button className="outline-none border-none w-[192px] min-h-[50px] bg-[#1D7293] text-white text-[18px] font-semibold font-inter rounded-[12px] shadow-bs">
            Explore more
          </button>
        </div>
      </div>
    </>
  );
};

export const Images = [
  "/assets/artwork-card.png",
  "/assets/artwork-card (2).png",
  "/assets/artwork-card (3).png",
  "/assets/artwork-card (4).png",
  "/assets/artwork-card (5).png",
  "/assets/artwork-card (6).png",
  "/assets/artwork-card (7).png",
  "/assets/artwork-card (8).png",
  "/assets/artwork-card (9).png",
  "/assets/artwork-card (10).png",
  "/assets/artwork-card (11).png",
];
