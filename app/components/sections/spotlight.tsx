import Image from "next/image";

export const SpotLight = () => {
  return (
    <>
      <div className="flex flex-col py-[201px] container mx-auto items-center">
        <h3 className="text-[#1D7293] uppercase text-[24px] font-extrabold tracking-[3.6px] font-manrope">
          ARTISTs SPOTLIGHT
        </h3>
        <div className="w-[1300px] mx-auto container bg-[rgba(29,114,147,0.10)] p-[40px] flex-col gap-[40px] mt-[40px]">
          <div className="flex items-center gap-[40px]">
            <Image src="/assets/photo.png" alt="" width={200} height={200} />
            <div
              className="flex flex-col gap-[10px]"
              style={{ width: "calc(100% - 200px)" }}
            >
              <span className="font-manrope text-[24px] font-semibold text-[#073141]">
                Luna Evergreen
              </span>
              <p className="text-[#073141] text-[18px] font-inter">
                Luna Evergreen is a visionary digital artist renowned for her
                ethereal and enchanting creations. With a background in mystical
                studies and a deep connection to nature, Luna{"'"}s artistry
                transcends the boundaries of reality, weaving together elements
                of magic, mythology, and fantasy into breathtaking works of art.
              </p>
              <div className="flex mt-[5px] gap-[20px]">
                <Image
                  src="/assets/globe 1.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <Image
                  src="/assets/icons-bi.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <Image
                  src="/assets/icons-bi (1).png"
                  alt=""
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[40px] mt-[40px]">
            <div className="flex flex-col">
              <div className="h-[502px] relative">
                <Image
                  src="/assets/celestial.png"
                  alt=""
                  fill={true}
                  sizes="100vw"
                />
              </div>
              <span
                className="mt-[20px] mb-[10px] text-[24px] text-[#073141] font-manrope font-semibold
              "
              >
                Celestial Symphony
              </span>
              <p className="font-[18px] font-inter text-[#073141] ">
                Explore the cosmos through Luna{"'"}s celestial landscapes and
                star-filled skies. Each painting invites viewers on a journey
                through the vast expanse of space, where galaxies collide, stars
                are born, and cosmic wonders await discovery.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-[502px] relative">
                <Image src="/assets/creature.png" alt="" fill sizes="100vw" />
              </div>
              <span
                className="mt-[20px] mb-[10px] text-[24px] text-[#073141] font-manrope font-semibold
              "
              >
                Magical Creatures
              </span>
              <p className="font-[18px] font-inter text-[#073141] ">
                Magical Creatures: Encounter mythical beings and fantastical
                creatures in Luna{"'"}s imaginative character designs. From
                elegant faeries and wise wizards to majestic dragons and
                mischievous sprites, Luna{"'"}s creations breathe life into
                legends and folklore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
