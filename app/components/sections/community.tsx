export const Community = () => {
  return (
    <>
      <div className="flex flex-col py-[50px] items-center bg-[#1D7293]">
        <h3 className="text-[#F6FDFF] text-[24px] font-bold uppercase tracking-[3.6px] font-manrope">
          Join the Community
        </h3>
        <p className="font-inter text-[#F6FDFF] mt-[20px] mb-[40px] md:w-[1000px] text-center whitespace-pre-line">
          {`Ready to take your digital art journey to new heights? Join the
            
            DesignForge community today and become part of a dynamic and supportive ecosystem of digital artists and enthusiasts. Whether you're here to showcase your work, learn from others, or simply immerse yourself in the world of digital creativity, DesignForge welcomes you with open arms.
          `}
        </p>
        <button className="outline-none border-none w-[192px] min-h-[50px]  text-[#1D7293] text-[18px] font-semibold font-inter rounded-[12px] shadow-bs bg-[#F6FDFF]">
          See Artwork
        </button>
      </div>
    </>
  );
};
